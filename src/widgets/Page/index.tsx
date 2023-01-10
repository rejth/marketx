import React from 'react';

import { classNames } from 'shared/lib';
import cls from './Page.module.scss';

interface IPageProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Page({ title, className, children }: IPageProps) {
  return (
    <section className={classNames(cls.Page, {}, [className])}>
      <h1 className={cls.page_title}>{title}</h1>
      {children}
    </section>
  );
}

Page.defaultProps = {
  className: '',
};
