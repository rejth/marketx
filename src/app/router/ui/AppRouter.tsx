import React, { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

const memorizedAppRouter = memo(AppRouter);
export { memorizedAppRouter as AppRouter };
