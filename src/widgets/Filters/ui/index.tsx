import React from 'react';

import { classNames } from 'shared/lib';
import cls from './Filters.module.scss';

export function Filters() {
  return (
    <div className={cls.Filters}>
      <form>
        <input id="search-input" type="text" placeholder="Search" />
      </form>
      <div className={cls.list_view_controls}>
        <i
          role="button"
          tabIndex={0}
          aria-label="Show product table"
          className={classNames(cls.bi, { [cls.active]: false }, ['bi-list'])}
          onKeyDown={() => {}}
          onClick={() => {}}
        />
        <i
          role="button"
          tabIndex={0}
          aria-label="Change product list"
          className={classNames(cls.bi, { [cls.active]: true }, ['bi-grid'])}
          onKeyDown={() => {}}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
