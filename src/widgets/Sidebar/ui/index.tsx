import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={cls.Sidebar}>
      <h2 className={cls.sidebar_title} data-element="title">
        <Link className="link-unstyled" to="/">
          Market X
        </Link>
      </h2>

      <ul className={cls.sidebar_navigation}>
        <li>
          <Link to="/" className="link-unstyled">
            <i className="bi bi-shop" />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="link-unstyled">
            <i className="bi bi-star" />
            Wishlist <span>0</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link-unstyled">
            <i className="bi bi-cart" />
            Cart <span>0</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
