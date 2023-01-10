import React from 'react';

import { classNames } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';

import { AppProvider } from './providers';
import { AppRouter } from './router';
import './styles/index.scss';

export function App() {
  return (
    <main className={classNames('app', {}, [])}>
      <AppProvider>
        <Sidebar />
        <AppRouter />
      </AppProvider>
    </main>
  );
}
