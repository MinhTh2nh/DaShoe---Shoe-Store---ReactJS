import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Male.module.scss';
import Sidebar from '~/components/Layout/components/Sidebar/Sidebar';
import config from '~/config';

const cx = classNames.bind(styles);

function Male() {
  const [visible, setVisible] = useState(true);
  const toggleSideBar = () => {
    setVisible(!visible);
  };

  return (
    <div className={cx('experience-wrapper')}>
      <div className={cx('sidebar')} style={{ display: visible ? 'block' : 'none', transition: 'margin-left 0.4s ease-in-out' }}>
        <Sidebar />
      </div>

      <div
        className={cx('product-grid', 'sub-product-grid')}
        style={{ marginLeft: visible ? '356px' : '0px', transition: 'margin-left 0.3s ease-in-out' }}
      >
        <header className={cx('wall-header')}>
          <div className={cx('wall-header_content')}>
            <nav className={cx('wall-header_nav')}>
              <button className={cx('filters-btn')} onClick={toggleSideBar}>
                {visible ? (
                  <span className={cx('filters-btn_filter_text')}>Hide Filters</span>
                ) : (
                  <span className={cx('filters-btn_filter_text')}>Show Filters</span>
                )}
                <FontAwesomeIcon className={cx('icon-filter-ds')} icon={faSliders} />
              </button>
            </nav>
          </div>
        </header>
        <div className={cx('wall-header-offset')}></div>
        <main>
          <section>
            <div className={cx('product-grid_items')}>
              <Link to={config.routes.productItem} className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </Link>
              {/*  */}
              <div className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </div>
              {/*  */}
              <div className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </div>
              {/*  */}
              <div className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </div>
              {/*  */}
              <div className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </div>
              {/*  */}
              <div className={cx('product-card', 'product-grid_card')}>
                <div className={cx('product-card_body')}>
                  <figure>
                    <div className={cx('wall-image-loader')}>
                      <img
                        alt="Nike Air Max SYSTM Men's Shoes"
                        className={cx('product-card_hero-image')}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png"
                      ></img>
                    </div>
                    <div className={cx('product-card_info')}>
                      <p className={cx('product-card_info-title')}>Nike Air Max SYSTM</p>
                      <p className={cx('product-card_info-body')}>Men's Shoes</p>
                    </div>
                    <div className={cx('product-card_footer')}>
                      <div className={cx('product-card_price')}>
                        <span className={cx('product-card_price-title')}>2,779,000đ</span>
                      </div>
                      <button className={cx('product-card_btn')}>
                        <FontAwesomeIcon className={cx('product-card_btn-shopping')} icon={faCartShopping} />
                      </button>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Male;
