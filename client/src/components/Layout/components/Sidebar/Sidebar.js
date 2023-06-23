import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  return (
    <aside className={cx('wrapper')}>
      <h2 className={cx('title')}>Shoes</h2>
      <li className={cx('wrapper-li')}>
        <ul>&nbsp;</ul>
        <ul className={cx('items')}>Adidas</ul>
        <ul className={cx('items')}>Nike</ul>
        <ul className={cx('items')}>New Balance</ul>
      </li>

      {/* Shop By price */}
      <div className={cx('Collapsible', !collapsed1 ? '-is-collapsed' : '')} onClick={() => setCollapsed1(!collapsed1)}>
        <span className={cx('Collapsible_trigger')}>
          <div className={cx('trigger-content')}>
            <div className={cx('trigger-content_label')}>Shop By Price</div>
            <div>
              {collapsed1 ? (
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
        <div style={{ display: collapsed1 ? 'block' : 'none' }} className={cx('filter-item_block')}>
          <button className={cx('filter-item')}>
            <input className={cx('pseudo-checkbox')} type="checkbox" />
            <span className={cx('filter-item_item-label')}>Under 1,000,000đ</span>
          </button>
          <button className={cx('filter-item')}>
            <input className={cx('pseudo-checkbox')} type="checkbox" />
            <span className={cx('filter-item_item-label')}>1,000,000đ - 2,000,000đ</span>
          </button>{' '}
          <button className={cx('filter-item')}>
            <input className={cx('pseudo-checkbox')} type="checkbox" />
            <span className={cx('filter-item_item-label')}>2,000,000đ - 4,000,000đ</span>
          </button>
        </div>
      </div>

      {/* Size */}
      <div className={cx('Collapsible', !collapsed2 ? '-is-collapsed' : '')} onClick={() => setCollapsed2(!collapsed2)}>
        <span className={cx('Collapsible_trigger')}>
          <div className={cx('trigger-content')}>
            <div className={cx('trigger-content_label')}>Size</div>
            <div>
              {collapsed2 ? (
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
        {/* ------------------------------------------------------- */}
        <div style={{ display: collapsed2 ? 'block' : 'none' }} className={cx('filter-item_block')}>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>29</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>30</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>31</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>32</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>33</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>34</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>35</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>36</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>37</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>38</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>39</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>40</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>41</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>42</span>
          </button>
          <button className={cx('filter-item-size')}>
            <span className={cx('filter-item_item-label')}>43</span>
          </button>
        </div>
      </div>

      {/* Colour */}
      <div className={cx('Collapsible', !collapsed3 ? '-is-collapsed' : '')} onClick={() => setCollapsed3(!collapsed3)}>
        <span className={cx('Collapsible_trigger')}>
          <div className={cx('trigger-content')}>
            <div className={cx('trigger-content_label')}>Colour</div>
            <div>
              {collapsed3 ? (
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
        {/* ------------------------------------------------------------------------ */}
        <div style={{ display: collapsed3 ? 'block' : 'none' }} className={cx('filter-item_block')}>
          <div className={cx('Collapsible_contentOuter', 'filter-group_outer')}>
            <div className={cx('Collapsible_contentIner', 'filter-group_content', 'for--colors')}>
              <div className={cx('filter-group_items-group')}>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--black')}></div>
                  <span className={cx('filter-item_item-label')}>Black</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--blue')}></div>
                  <span className={cx('filter-item_item-label')}>Blue</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--brown')}></div>
                  <span className={cx('filter-item_item-label')}>Brown</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--green')}></div>
                  <span className={cx('filter-item_item-label')}>Green</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--grey')}></div>
                  <span className={cx('filter-item_item-label')}>Grey</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--multi-colour')}></div>
                  <span className={cx('filter-item_item-label')}>Multi-colour</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--orange')}></div>
                  <span className={cx('filter-item_item-label')}>Orange</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--pink')}></div>
                  <span className={cx('filter-item_item-label')}>Pink</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--purple')}></div>
                  <span className={cx('filter-item_item-label')}>Purple</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--red')}></div>
                  <span className={cx('filter-item_item-label')}>Red</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--white')}></div>
                  <span className={cx('filter-item_item-label')}>White</span>
                </button>
                <button className={cx('filter-item-colour')}>
                  <div className={cx('filter-item_color-patch', 'is--yellow')}></div>
                  <span className={cx('filter-item_item-label')}>Yellow</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
