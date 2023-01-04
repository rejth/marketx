import React from 'react';
import { RouteProps } from 'react-router-dom';

import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';

enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
