import React from 'react';

import { classNames } from 'shared/lib';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

Loader.defaultProps = {
  className: '',
};
