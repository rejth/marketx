import React from 'react';

import { classNames } from 'shared/lib';
import { AppProvider } from './providers';
import { AppRouter } from './router';
import './styles/index.scss';

export function App() {
  return (
    <main className={classNames('app', {}, [])}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </main>
  );
}
