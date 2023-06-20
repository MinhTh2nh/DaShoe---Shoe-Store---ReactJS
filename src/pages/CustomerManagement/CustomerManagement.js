import classNames from 'classnames/bind';
import styles from './CustomerManagement.module.scss';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const cx = classNames.bind(styles);

function ProductManagement() {
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerBirth, setcustomerBirth] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerGender, setCustomerGender] = useState('');

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    const filteredCustomers = customers.filter((cus) =>
      Object.values(cus).some(
        (value) => value && typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
    setFiltered(filteredCustomers);
  }, [searchValue, customers]);

  const handleClickOpen = (customer) => {
    if (customer.id) {
      setCustomer(customer);
      setCustomerName(customer.name);
      setCustomerPhone(customer.phone);
      setCustomerEmail(customer.email);
      setcustomerBirth(customer.birth);
      setCustomerAddress(customer.address);
      setCustomerCity(customer.city);
      setCustomerGender(customer.gender);
    } else {
      setCustomer({});
      setCustomerName('');
      setCustomerPhone('');
      setCustomerEmail('');
      setcustomerBirth('');
      setCustomerAddress('');
      setCustomerCity('');
      setCustomerGender('');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios
      .get('http://localhost:3000/customers')
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  };

  const handleAddProduct = (customer) => {
    axios
      .post('http://localhost:3000/customers', customer)
      .then(() => {
        fetchCustomers();
        alert('The action has been successfully executed.');
      })
      .catch((err) => {
        console.log(err);
        alert('The action has been failed executed.');
      });
  };

  const handleUpdateProduct = (customer) => {
    axios
      .put(`http://localhost:3000/customers/${customer.id}`, customer)
      .then(() => {
        fetchCustomers();
        alert('The action has been successfully executed.');
      })
      .catch((err) => {
        console.log(err);
        alert('The action has been failed executed.');
      });
  };

  const handleDeleteProduct = (customer) => {
    axios
      .delete(`http://localhost:3000/customers/${customer.id}`)
      .then(() => {
        fetchCustomers();
        alert('The action has been successfully executed.');
      })
      .catch((err) => {
        console.log(err);
        alert('The action has been failed executed.');
      });
  };

  const handleSubmit = () => {
    const customerData = {
      name: customerName,
      phone: customerPhone,
      email: customerEmail,
      birth: customerBirth,
      address: customerAddress,
      city: customerCity,
      gender: customerGender,
    };

    if (
      customerName.trim() === '' ||
      customerPhone.trim() === '' ||
      customerEmail.trim() === '' ||
      customerBirth.trim() === '' ||
      customerAddress.trim() === '' ||
      customerCity.trim() === '' ||
      customerGender.trim() === ''
    ) {
      console.error('Please fill in all product information.');
      alert('The action has been failed executed.');
      return;
    }

    if (customer.id) {
      const updatedCustomer = { ...customer, ...customerData };
      handleUpdateProduct(updatedCustomer);
    } else {
      handleAddProduct(customerData);
    }

    handleClose();
  };

  const handleCustomerChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s-]*$/;
    if (regex.test(inputValue)) {
      setCustomerName(inputValue);
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^\d{0,10}$/;
    if (inputValue === '' || (regex.test(inputValue) && parseInt(inputValue) >= 0)) {
      setCustomerPhone(inputValue);
    }
  };

  const handleCityChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s-]*$/;
    if (regex.test(inputValue)) {
      setCustomerCity(inputValue);
    }
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('function-site')}>
        <button variant="outlined" onClick={handleClickOpen} className={cx('btn-add')}>
          ADD
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{customer.id ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <div className={cx('container')}>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Customer"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerName}
                    onChange={handleCustomerChange}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="mobile"
                    label="Mobile"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerPhone}
                    onChange={handlePhoneChange}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="birth"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerBirth}
                    onChange={(e) => setcustomerBirth(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={customerCity}
                    onChange={handleCityChange}
                  />
                </div>
                <div className={cx('row-form')}>
                  <FormControl style={{ margin: '8px 0' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="Gender">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="gender"
                      value={customerGender}
                      onChange={(e) => setCustomerGender(e.target.value)}
                      label="gender"
                    >
                      <MenuItem value={'male'}>male</MenuItem>
                      <MenuItem value={'female'}>female</MenuItem>
                      <MenuItem value={'others'}>others</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </DialogContent>
          </form>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
            >
              {customer.id ? 'Update Entry' : 'Submit'}
            </Button>
          </DialogActions>
        </Dialog>
        <div className={cx('search-site')}>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            ref={inputRef}
            className={cx('input-search')}
            name="text"
            placeholder="Search..."
            type="search"
            value={searchValue}
            onChange={handleChange}
          />
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </div>
      <div className={cx('table-site')}>
        <div className={cx('table')}>
          <div className={cx('table-grid')}>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>CustomerID</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Name</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Mobile</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Email</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Date of Birth</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Address</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>City</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Gender</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Actions</h5>
            </div>
          </div>
          {filtered.map((cus) => {
            return (
              <div key={cus.id} className={cx('table-grid', 'item-grid')}>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.id}</p>
                </div>
                <div className={cx('item-site1')}>
                  <p className={cx('item-content')}>{cus.name}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.phone}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.email}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.birth}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.address}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.city}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{cus.gender}</p>
                </div>
                <div className={cx('item-site')}>
                  <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faPencil}
                      onClick={() => {
                        handleClickOpen(cus);
                      }}
                    />
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faTrash}
                      onClick={() => {
                        handleDeleteProduct(cus);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductManagement;
