import React from 'react';

import { Card } from 'entities/Product';
import cls from './WishListCard.module.scss';

export function WishListCard() {
  return (
    <div className={cls.WishListCard}>
      <div
        role="button"
        tabIndex={0}
        className={cls.close_btn}
        onKeyDown={() => {}}
        onClick={() => {}}
      >
        <i className="bi bi-x" />
      </div>
      <Card />
    </div>
  );
}
