import React from 'react';

import { classNames } from 'shared/lib';
import { AppProvider } from './providers';
import './styles/index.scss';

export function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <AppProvider />
    </div>
  );
}
