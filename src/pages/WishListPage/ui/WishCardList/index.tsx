import React from 'react';

import { WishListCard } from '../WishListCard';
import cls from './WishCardList.module.scss';

export function WishCardList() {
  return (
    <div className={cls.WishCardList}>
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </div>
  );
}
