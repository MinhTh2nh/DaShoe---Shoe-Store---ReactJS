import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import config from '~/config';
import styles from './Header.module.scss';
// import images from '~/assets/images';
import logo from '~/assets/images/logo.png';
import Search from '../Search';
import MenuItem from '~/components/Layout/components/MenuItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: 'Profile',
    to: '/profile',
  },
  {
    title: 'Orders',
    to: '/orders',
  },
  {
    title: 'Favourites',
    to: '/favourites',
  },
  {
    title: 'Inbox',
    to: '/inbox',
  },
  {
    title: 'Experiences',
    to: '/experiences',
  },
  {
    title: 'Account Settings',
    to: '/accountsetting',
  },
  {
    title: 'Admin',
    to: '/customermanagement',
  },
  {
    title: 'Log Out',
    to: '/login',
  },
];

function Header() {
  const currentUser = false;
  const [productResult, setProductResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductResult([1, 2, 3]);
    }, 0);
  }, []);

  // function render Item trong MENU_ITEMS
  const renderItem = () => {
    return MENU_ITEMS.map((MENU_ITEMS, index) => (
      <Link className={cx('menu-items')} key={index} to={MENU_ITEMS.to}>
        {MENU_ITEMS.title}
      </Link>
    ));
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={logo} alt="DaShoe" className={cx('logo')} />
        </Link>

        <ul className={cx('pre-desktop-menu')}>
          {/* Menu Product */}
          <Tippy
            interactive
            delay={[0, 200]}
            render={(attrs) => (
              <div className={cx('dropdown-menu')} tabIndex="-1" {...attrs}>
                <MenuItem>
                  <Link to={config.routes.male} className={cx('wrapper-product')}>
                    <img
                      className={cx('item-avatar')}
                      src="https://ananas.vn/wp-content/uploads/Menu_Nam.jpg"
                      alt="Male"
                    />
                    <div className={cx('wrapper-title')}>
                      <h4 className={cx('title-product')}>Male</h4>
                    </div>
                  </Link>

                  <Link to={config.routes.female} className={cx('wrapper-product')}>
                    <img
                      className={cx('item-avatar')}
                      src="https://ananas.vn/wp-content/uploads/Menu_Nu.jpg"
                      alt="Female"
                    />
                    <div className={cx('wrapper-title')}>
                      <h4 className={cx('title-product')}>Female</h4>
                    </div>
                  </Link>

                  <div className={cx('wrapper-product')}>
                    <img
                      className={cx('item-avatar')}
                      src="https://ananas.vn/wp-content/uploads/Menu_Sale-off.jpg"
                      alt="Sell Off"
                    />
                    <div className={cx('wrapper-title')}>
                      <h4 className={cx('title-product')}>Sell Off</h4>
                    </div>
                  </div>
                </MenuItem>
              </div>
            )}
          >
            <li className={cx('pre-desktop-menu-item')}>
              <button className={cx('dropdown-toggle')}>Product</button>
            </li>
          </Tippy>

          {/* Menu Male */}
          <Tippy
            interactive
            render={(attrs) => (
              <div className={cx('dropdown-menu-male')} tabIndex="-1" {...attrs}>
                <MenuItem>
                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Featured</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>Best Seller</ul>
                    <ul className={cx('type-product')}>New Arrival</ul>
                    <ul className={cx('type-product')}>Sell Off</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>Products Type</ul>
                  </li>

                  <li className={cx('style-divider')}></li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Adidas</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All Shoes</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Trainning</ul>
                    <ul className={cx('type-product')}>Essentials</ul>
                    <ul className={cx('type-product')}>Outdoor</ul>
                    <ul className={cx('type-product')}>Sportswear</ul>
                  </li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Nike</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All shoes</ul>
                    <ul className={cx('type-product')}>Sneaker</ul>
                    <ul className={cx('type-product')}>Lifestyle</ul>
                    <ul className={cx('type-product')}>Jordan</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Gym and Training</ul>
                  </li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>New Balance</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All shoes</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Lifestyle</ul>
                    <ul className={cx('type-product')}>Training</ul>
                    <ul className={cx('type-product')}>Walking</ul>
                    <ul className={cx('type-product')}>Skateboarding</ul>
                    <ul className={cx('type-product')}>Hiking & Trail</ul>
                    <ul className={cx('type-product')}>Work shoes</ul>
                  </li>
                </MenuItem>
              </div>
            )}
          >
            <Link to={config.routes.male} className={cx('pre-desktop-menu-item')}>
              <button className={cx('dropdown-toggle')}>Male</button>
            </Link>
          </Tippy>
          {/* Menu Female */}
          <Tippy
            interactive
            render={(attrs) => (
              <div className={cx('dropdown-menu-female')} tabIndex="-1" {...attrs}>
                <MenuItem>
                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Featured</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>Best Seller</ul>
                    <ul className={cx('type-product')}>New Arrival</ul>
                    <ul className={cx('type-product')}>Sell Off</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>Products Type</ul>
                  </li>

                  <li className={cx('style-divider')}></li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Adidas</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All Shoes</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Trainning</ul>
                    <ul className={cx('type-product')}>Essentials</ul>
                    <ul className={cx('type-product')}>Sportswear</ul>
                  </li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>Nike</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All shoes</ul>
                    <ul className={cx('type-product')}>Sneaker</ul>
                    <ul className={cx('type-product')}>Lifestyle</ul>
                    <ul className={cx('type-product')}>Jordan</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Gym and Training</ul>
                  </li>

                  <li className={cx('wrapper-li')}>
                    <ul className={cx('title')}>New Balance</ul>
                    <ul>&nbsp;</ul>
                    <ul className={cx('type-product')}>All shoes</ul>
                    <ul className={cx('type-product')}>Running</ul>
                    <ul className={cx('type-product')}>Lifestyle</ul>
                    <ul className={cx('type-product')}>Training</ul>
                    <ul className={cx('type-product')}>Walking</ul>
                    <ul className={cx('type-product')}>Skateboarding</ul>
                    <ul className={cx('type-product')}>Hiking & Trail</ul>
                    <ul className={cx('type-product')}>Work shoes</ul>
                  </li>
                </MenuItem>
              </div>
            )}
          >
            <Link to={config.routes.female} className={cx('pre-desktop-menu-item')}>
              <button className={cx('dropdown-toggle')}>Female</button>
            </Link>
          </Tippy>
          {/* Menu Sell Off */}
          <li className={cx('pre-desktop-menu-item')}>
            <button className={cx('dropdown-toggle')}>Sell Off</button>
          </li>
        </ul>
        <div className={cx('search-place')}>
          <Search />
          <div className={cx('infor-btn')}>
            <Tippy delay={[0, 200]} content="Selected Items" placement="bottom">
              <button className={cx('shopping-btn')}>
                <FontAwesomeIcon icon={faBagShopping} />
              </button>
            </Tippy>

            <div className={cx('action')}></div>
            {currentUser ? (
              <Tippy
                interactive
                // visible
                placement="bottom-end"
                render={(attrs) => (
                  <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <h2 className={cx('title-menu')}>Account</h2>
                      {renderItem()}
                    </PopperWrapper>
                  </div>
                )}
              >
                <button className={cx('user')}>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </Tippy>
            ) : (
              <button className={cx('login-btn')}>
                <Link to={config.routes.login}>Log in</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
