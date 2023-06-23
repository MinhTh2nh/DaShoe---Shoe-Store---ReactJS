import classNames from 'classnames/bind';
import styles from './SupplierManagement.module.scss';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCustomer from '~/components/Layout/components/AddCustomer/AddCustomer';

const cx = classNames.bind(styles);

let sampleData = [
  {
    entryid: '001',
    datebookentry: '2023-03-23',
    supplier: 'S001',
    total: '9000000',
    detail: 'view',
  },
];

function SupplierManagement() {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('function-site')}>
        <button variant="outlined" onClick={handleClickOpen} className={cx('btn-add')}>
          ADD
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Customer</DialogTitle>
          <DialogContent>
            <AddCustomer />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
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
              <h5 className={cx('row-title')}>Entry ID</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Date of Book Entry</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Supplier</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Total</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Detail</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Actions</h5>
            </div>
          </div>
          {sampleData.map((val, key) => {
            return (
              <div key={key} className={cx('table-grid', 'item-grid')}>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{val.entryid}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{val.datebookentry}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{val.supplier}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{val.total}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{val.detail}</p>
                </div>
                <div className={cx('item-site')}>
                  <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon className={cx('icon-action')} icon={faPencil} />
                    <FontAwesomeIcon className={cx('icon-action')} icon={faTrash} />
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

export default SupplierManagement;
