import React from 'react';
import { RouteProps } from 'react-router-dom';

import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { CartPage } from 'pages/CartPage';
import { WishListPage } from 'pages/WishListPage';

enum AppRoutes {
  MAIN = 'main',
  CART = 'cart',
  WISHLIST = 'wishlist',
  NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.WISHLIST]: '/wishlist',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  [AppRoutes.WISHLIST]: {
    path: RoutePath.wishlist,
    element: <WishListPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
