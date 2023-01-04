import React from 'react';

import { classNames } from 'shared/lib';
import cls from './Page.module.scss';

interface IPageProps {
  children: React.ReactNode;
  className?: string;
}

export function Page({ className, children }: IPageProps) {
  return <main className={classNames(cls.Page, {}, [className])}>{children}</main>;
}

Page.defaultProps = {
  className: '',
};
