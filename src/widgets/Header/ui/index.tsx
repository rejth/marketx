import React from 'react';

import UserIcon from 'shared/assets/icons/user.svg';
import cls from './Header.module.scss';

export function Header() {
  return (
    <header className={cls.Header}>
      <div className={cls.logo_area}>Market X</div>
      <div className={cls.user_area}>
        <span className={cls.icon}>
          <UserIcon onClick={() => {}} />
        </span>
      </div>
    </header>
  );
}
