import React from 'react';

import { Page } from 'widgets/Page';
import CartItem from './CartItem';

export default function CartPage() {
  return (
    <Page title="Cart">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Page>
  );
}
