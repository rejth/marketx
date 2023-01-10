import React from 'react';

import { Page } from 'widgets/Page';
import { WishCardList } from './WishCardList';

export default function WishListPage() {
  return (
    <Page title="Wish list">
      <WishCardList />
    </Page>
  );
}
