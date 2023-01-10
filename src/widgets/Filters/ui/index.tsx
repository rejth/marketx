import React from 'react';

import { classNames } from 'shared/lib';
import cls from './Filters.module.scss';

export function Filters() {
  return (
    <div className={cls.Filters}>
      <div className={cls.list_view_controls}>
        <i
          role="button"
          tabIndex={0}
          aria-label="Show product table"
          className={classNames('bi', { [cls.active]: false }, ['bi-list'])}
          onKeyDown={() => {}}
          onClick={() => {}}
        />
        <i
          role="button"
          tabIndex={0}
          aria-label="Change product list"
          className={classNames('bi', { [cls.active]: false }, ['bi-grid'])}
          onKeyDown={() => {}}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
