import React from 'react';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib';

import cls from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={cls.Sidebar}>
      <h2 className={cls.sidebar_title}>
        <NavLink className={cls.link_unstyled} to="/">
          Market X
        </NavLink>
      </h2>

      <ul className={cls.sidebar_navigation}>
        <li>
          <NavLink to="/" className={cls.link_unstyled}>
            <i className={classNames(cls.bi, {}, ['bi-shop'])} />
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className={cls.link_unstyled}>
            <i className={classNames(cls.bi, {}, ['bi-star'])} />
            Wishlist <span>0</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={cls.link_unstyled}>
            <i className={classNames(cls.bi, {}, ['bi-cart'])} />
            Cart <span>0</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
