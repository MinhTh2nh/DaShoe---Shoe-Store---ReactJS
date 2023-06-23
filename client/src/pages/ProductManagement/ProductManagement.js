import classNames from 'classnames/bind';
import styles from './ProductManagement.module.scss';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

const PUBLIC_API_URL = 'http://localhost:2000';

const cx = classNames.bind(styles);

function ProductManagement() {
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [productType, setProductType] = useState('');
  const [productStyle, setProductStyle] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productColor, setProductColor] = useState('');

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
    const filteredProducts = products.filter((pro) =>
      Object.values(pro).some(
        (value) => value && typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
    setFilteredProduct(filteredProducts);
  }, [searchValue, products]);

  const handleClickOpen = (product) => {
    if (product.shoe_id) {
      setProduct(product);
      setProductName(product.shoe_name);
      setProductPrice(product.shoe_price);
      setProductType(product.type);
      setProductStyle(product.style);
      setProductBrand(product.brand);
      setProductSize(product.size);
      setProductColor(product.color);
    } else {
      setProduct({});
      setProductName('');
      setProductPrice('');
      setProductType('');
      setProductStyle('');
      setProductBrand('');
      setProductSize('');
      setProductColor('');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(`${PUBLIC_API_URL}/api/products`)
      .then((res) => {setProducts(res.data.products)})
      .catch((err) => console.log(err));
  };

  const handleAddProduct = (product) => {
    axios
      .post(`${PUBLIC_API_URL}/api/products`, product)
      .then(() => {
        fetchProducts();
        alert('The action has been successfully executed.');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleUpdateProduct = (product) => {
    axios
      .put(`${PUBLIC_API_URL}/api/products/${product.shoe_id}`, product)
      .then(() => {
        fetchProducts();
        alert('The action has been successfully executed.');
      })
      .catch((err) => {
        console.log(err);
        alert('The action has been failed executed.');
      }); 
  };

  const handleDeleteProduct = (product) => {
    axios
      .delete(`${PUBLIC_API_URL}/api/products/${product.shoe_id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const productData = {
      name: productName,
      price: productPrice,
      type: productType,
      style: productStyle,
      brand: productBrand,
      size: productSize,
      color: productColor,
    };

    if (
      productName.trim() === '' ||
      productPrice.trim() === '' ||
      productType.trim() === '' ||
      productStyle.trim() === '' ||
      productSize.trim() === '' ||
      productColor.trim() === ''
    ) {
      alert('Please fill in all product information.');
      return;
    }

    if (productPrice.trim() === '' || parseFloat(productPrice) < 0) {
      alert('Price cannot be lower than 0.');
      return;
    }
    
    if (product.shoe_id) {
      const updatedProduct = { ...product, ...productData };
      handleUpdateProduct(updatedProduct);
    } else {
      handleAddProduct(productData);
    }

    handleClose();
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('function-site')}>
        <button variant="outlined" onClick={handleClickOpen} className={cx('btn-add')}>
          ADD
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{product.shoe_id ? 'Edit Product' : 'Add Product'}</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <div className={cx('container')}>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Product name"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="formatted-numberformat-input"
                    label="price"
                    type="number"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <FormControl style={{ margin: '8px 0' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      label="Type"
                    >
                      <MenuItem value="unisex">Unisex</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="style"
                    label="Style"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productStyle}
                    onChange={(e) => setProductStyle(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <FormControl style={{ margin: '8px 0' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="brand">Brand</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="brand"
                      value={productBrand}
                      onChange={(e) => setProductBrand(e.target.value)}
                      label="Brand"
                    >
                      <MenuItem value={'adidas'}>adidas</MenuItem>
                      <MenuItem value={'nike'}>nike</MenuItem>
                      <MenuItem value={'new balance'}>new balance</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl style={{ margin: '8px 0' }} className={cx('size-grid')}>
                    <FormLabel id="size">Size</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={35}
                      name="size"
                      value={productSize}
                      onChange={(e) => setProductSize(e.target.value)}
                    >
                      <div className={cx('size-flex')}>
                        <FormControlLabel value={34} control={<Radio />} label="34" />
                        <FormControlLabel value={35} control={<Radio />} label="35" />
                        <FormControlLabel value={36} control={<Radio />} label="36" />
                        <FormControlLabel value={37} control={<Radio />} label="37" />
                        <FormControlLabel value={38} control={<Radio />} label="38" />
                        <FormControlLabel value={39} control={<Radio />} label="39" />
                        <FormControlLabel value={40} control={<Radio />} label="40" />
                        <FormControlLabel value={41} control={<Radio />} label="41" />
                        <FormControlLabel value={42} control={<Radio />} label="42" />
                        <FormControlLabel value={43} control={<Radio />} label="43" />
                        <FormControlLabel value={44} control={<Radio />} label="44" />
                        <FormControlLabel value={45} control={<Radio />} label="45" />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={cx('row-form')}>
                  <FormControl style={{ margin: '8px 0' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="Color">Color</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="color"
                      value={productColor}
                      onChange={(e) => setProductColor(e.target.value)}
                      label="color"
                    >
                      <MenuItem value={'black'}>black</MenuItem>
                      <MenuItem value={'blue'}>blue</MenuItem>
                      <MenuItem value={'brown'}>brown</MenuItem>
                      <MenuItem value={'green'}>green</MenuItem>
                      <MenuItem value={'grey'}>grey</MenuItem>
                      <MenuItem value={'multi-clour'}>multi-colour</MenuItem>
                      <MenuItem value={'orange'}>orange</MenuItem>
                      <MenuItem value={'pink'}>pink</MenuItem>
                      <MenuItem value={'purple'}>purple</MenuItem>
                      <MenuItem value={'red'}>red</MenuItem>
                      <MenuItem value={'white'}>white</MenuItem>
                      <MenuItem value={'yellow'}>yellow</MenuItem>
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
              {product.shoe_id ? 'Update Entry' : 'Submit'}
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
              <h5 className={cx('row-title')}>ProductID</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Product</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Price</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Type</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Style</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Brand</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Size</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Color</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Actions</h5>
            </div>
          </div>
          {filteredProduct.map((pro) => {
            return (
              <div key={pro.id} className={cx('table-grid', 'item-grid')}>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.shoe_id}</p>
                </div>
                <div className={cx('item-site1')}>
                  <p className={cx('item-content')}>{pro.shoe_name}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.shoe_price}$</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.type}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.style}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.brand}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.size}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.color}</p>
                </div>
                <div className={cx('item-site')}>
                  <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faPencil}
                      onClick={() => {
                        handleClickOpen(pro);
                      }}
                    />
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faTrash}
                      onClick={() => handleDeleteProduct(pro)}
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
