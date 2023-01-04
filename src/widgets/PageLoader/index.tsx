import React from 'react';

import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: IPageLoaderProps) {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}

PageLoader.defaultProps = {
  className: '',
};
