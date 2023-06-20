import { faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './productItem.module.scss';

const cx = classNames.bind(styles);

function productItem() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(true);

  // const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className={cx('product-container', 'css-1wpyz1n')}>
      <div className={cx('box-content-wrapper')}>
        <div className={cx('box-content')}>
          <div className={cx('content-image')}>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/50f1ec1a-68dd-48fc-94de-7fdd61e3285e/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/51edeb70-8c91-4828-a3da-b54227ee0a75/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a6b543ef-4a11-4658-9890-ddd5d697fa5c/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/414a82c3-d3e4-4a4e-836f-cabba606c815/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7fc61711-1c27-4717-846f-9a2b3b266eea/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1c927e68-02c2-40fc-9be8-d1ae71ca42cf/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6575d775-3d13-4acf-a825-1f51aae29fde/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
            <button className={cx('item-image')}>
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/77bd3094-cd0b-4a31-86ad-f19409d7a014/air-max-systm-shoes-hLmQ85.png"
                className={cx('item-image-containt')}
              ></img>
            </button>
          </div>
        </div>
      </div>
      {/* ------------------side bar--------------------------------- */}
      <div className={cx('side-wrapper')}>
        <div className={cx('box-side-container')}>
          {/* title */}
          <div className={cx('side-content-title')}>
            <div className={cx('pr2-sm', 'css-lou6bb2')}>
              <h1 className={cx('headline-2')}>Nike Air Max SYSTM</h1>
              <h2 className={cx('headline-5')}>Men's Shoe</h2>
              <div className={cx('mb3-sm')}>
                <div className={cx('headline-5', 'mt-2', 'mt-3')}>
                  <div className={cx('product-price_wrapper')}>
                    <div className={cx('product-price')}>2,779,000đ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Size */}
          <div className={cx('mt8-lg')}>
            <div className={cx('add-to-cart-form', 'buying-tools')}>
              <div className={cx('size-box-sm', 'size-box-lg')}>
                <div className={cx('mt-5', 'mb3-sm', 'body-2', 'css-1pj6y87')}>
                  <div className={cx('pt8-sm', 'pt0-lg', 'headline-5', 'css-uflume')}>
                    <span className={cx('pr10-sm', 'ta-sm-1', 'sizeHeader')}>Select Size</span>
                  </div>
                  <div className={cx('mt2-sm', 'css-12whm6j')}>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>29</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>30</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>31</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>32</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>33</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>34</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>35</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>36</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>37</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>38</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>39</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>40</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>41</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>42</label>
                    </div>
                    <div>
                      <input type="radio" className={cx('visually-hidden')} />
                      <label className={cx('css-xf3ahg')}>43</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={cx('mt10-sm', 'mb6-sm', 'pr16-sm', 'pr10-lg', 'u-full-width', 'css-181b4yz')}>
                    <button className={cx('ncss-btn-primary-dark', 'btn-lg', 'add-to-cart-btn')}>Add to Bag</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* the information of product */}
          <span>
            <div className={cx('pt6-sm', 'pr16-sm', 'pr10-lg')}>
              <div className={cx('description-preview', 'body-2', 'css-1pbvugb')}>
                <p>
                  Looks Max, feels Max. The Air Max SYSTM brings back everything you love about your favourite '80s
                  vibes (without the parachute trousers). Tried-and-tested visible Nike Air cushioning pairs with a
                  sleek, sport-inspired upper. It's Air Max delivering again.
                </p>
              </div>
            </div>
          </span>
          {/* Reviews */}
          <div
            className={cx('Collapsible', !collapsed ? '-is-collapsed' : '')}
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className={cx('Collapsible_trigger')}>
              <div className={cx('trigger-content')}>
                <div className={cx('trigger-content_label')}>Reviews</div>
                <div className={cx('star-rating')}>
                  <span className={cx('icon-star')}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>{' '}
                  <span className={cx('icon-star')}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>{' '}
                  <span className={cx('icon-star')}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>{' '}
                  <span className={cx('icon-star')}>
                    <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                  </span>{' '}
                  <span className={cx('icon-star')}>
                    <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                  </span>{' '}
                </div>
                <div>
                  {collapsed ? (
                    <button className={cx('trigger-content_icon', '-is-up')}>
                      <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                  ) : (
                    <button className={cx('trigger-content_icon', '-is-down')}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  )}
                </div>
              </div>
            </span>
            <div style={{ display: collapsed ? 'block' : 'none' }} className={cx('filter-item_block')}>
              <div className={cx('css-1e0k2gt')}>
                <div className={cx('reviews-component', 'mb5-sm')}>
                  <div className={cx('product-review', 'mb10-sm')}>
                    <div className={cx('star-rating', 'stars', 'd-sm-ib')}>
                      <span className={cx('icon-star', 'size-star')}>
                        <FontAwesomeIcon icon={faStar} />
                      </span>{' '}
                      <span className={cx('icon-star', 'size-star')}>
                        <FontAwesomeIcon icon={faStar} />
                      </span>{' '}
                      <span className={cx('icon-star', 'size-star')}>
                        <FontAwesomeIcon icon={faStar} />
                      </span>{' '}
                      <span className={cx('icon-star', 'size-star')}>
                        <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                      </span>{' '}
                      <span className={cx('icon-star', 'size-star')}>
                        <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                      </span>{' '}
                    </div>
                    <p className={cx('d-sm-ib', 'p14-sm')}>3 stars</p>
                    <p className={cx('pt2-sm', 'd-lg-b')}>
                      <button className={cx('ncss-cta-primary-dark', 'btn-lg', 'underline', 'pr10-sm', 'pb0-sm')}>
                        Write a Review
                      </button>
                    </p>
                  </div>
                  <ul>
                    <li className={cx('review', 'mb10-sm')}>
                      <h4 className={cx('review-title', 'headline-5')}>ThanhNgoo</h4>
                      <div className={cx('star-rating', 'star', 'd-sm-ib', 'body-2')}>
                        <span className={cx('icon-star', 'size-star')}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>{' '}
                        <span className={cx('icon-star', 'size-star')}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>{' '}
                        <span className={cx('icon-star', 'size-star')}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>{' '}
                        <span className={cx('icon-star', 'size-star')}>
                          <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                        </span>{' '}
                        <span className={cx('icon-star', 'size-star')}>
                          <FontAwesomeIcon className={cx('regular-star')} icon={faStar} />
                        </span>{' '}
                      </div>
                      <p className={cx('p14-sm', 'd-sm-ib', 'text-color-secondary')}>thanhngoo123 - 4/15/2023</p>
                      <p className={cx('pb2-sm')}></p>
                      <div>
                        <p>
                          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                          graphic or web designs.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <p className={cx('mt10-sm', 'mb10-sm')}>
                    <button className={cx('ncss-cta-primary-dark', 'btn-lg', 'css-1nglku6')}>
                      <label className={cx('css-15juft3')}>More Reviews</label>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productItem;
