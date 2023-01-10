import React from 'react';
import cls from './CartItem.module.scss';

export default function CartItem() {
  return (
    <li className={cls.CartItem}>
      <div className={cls.cart_item_preview}>
        <img
          src="https://c.dns-shop.ru/thumb/st4/fit/0/0/29a12db849d89c29dd5d47a1cd6d4e2d/7d51a46e3b127ac66e2225cd0090403054f0d9ee0596d27b78bf1ec2d403972d.jpg"
          alt="Product"
        />
      </div>
      <div className={cls.cart_item_name}>Display 2.1 Dialog AP-222B</div>
      <div className={cls.cart_item_counter}>
        <button
          type="button"
          aria-label="Add another item"
          className={cls.cart_item_count_btn}
          onClick={() => {}}
        >
          <i className="bi bi-dash-circle" />
        </button>
        <span>0</span>
        <button
          type="button"
          aria-label="Remove item"
          className={cls.cart_item_count_btn}
          onClick={() => {}}
        >
          <i className="bi bi-plus-circle" />
        </button>
      </div>
      <div className={cls.cart_item_price}>{0 * 0}</div>
    </li>
  );
}
