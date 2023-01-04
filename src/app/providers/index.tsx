import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'app/router';
import { ErrorBoundary } from './ErrorBoundary';

export function AppProvider() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback="">
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
