import React from 'react';

import { CardList } from 'entities/Product';
import { Page } from 'widgets/Page';
import { Filters } from 'widgets/Filters';

export default function MainPage() {
  return (
    <Page title="Products">
      <Filters />
      <CardList />
    </Page>
  );
}
