import React from 'react';

import { Card } from '../Card';
import cls from './CardList.module.scss';

export function CardList() {
  return (
    <div className={cls.CardList}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
