import React from 'react';

import { classNames } from 'shared/lib';
import cls from './Card.module.scss';

export function Card() {
  const isActive = true;
  return (
    <div className={cls.Card}>
      <div
        className={cls.card_image}
        style={{
          backgroundImage: `url(https://c.dns-shop.ru/thumb/st4/fit/0/0/29a12db849d89c29dd5d47a1cd6d4e2d/7d51a46e3b127ac66e2225cd0090403054f0d9ee0596d27b78bf1ec2d403972d.jpg)`,
        }}
      />

      <div className={cls.card_content}>
        <div className={cls.card_price_wrapper}>
          <div className={cls.card_rating}>
            <span>4.5</span>
            <i className="bi bi-star" />
          </div>
          <div className={cls.card_price}>20 USD</div>
        </div>
        <h5 className={cls.card_title}>Display 2.1 Dialog AP-222B</h5>
        <p className={cls.card_description}>Aqua Work 5-VB gray</p>
      </div>

      <footer className={cls.card_footer}>
        <button
          type="button"
          aria-label="Add to wish list"
          className={classNames(cls.card_button, { [cls.active]: isActive }, [
            'add_to_wishlist_btn',
          ])}
          onClick={() => {}}
        >
          {!isActive && <i className={classNames(cls.bi, {}, ['bi-heart'])} />}
          {isActive && <i className={classNames(cls.bi, {}, ['bi-heart-fill'])} />}
          Wishlist
        </button>
        <div className={cls.buttons_separator} />
        <button
          type="button"
          aria-label="Add to cart"
          className={classNames(cls.card_button, { [cls.active]: isActive }, ['add_to_cart_btn'])}
          onClick={() => {}}
        >
          {!isActive && <i className={classNames(cls.bi, {}, ['bi-cart'])} />}
          {isActive && <i className={classNames(cls.bi, {}, ['bi-cart-check-fill'])} />}
          Cart
        </button>
      </footer>
    </div>
  );
}
