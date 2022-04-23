import React, { memo } from 'react';
import { SearchBar } from './SearchBar';
import { FeaturedNews } from './FeaturedNews';
import { BreakingNews } from './BreakingNews';
import { Screen } from './Screen';

export const Home = memo(() => {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
      <BreakingNews />
    </Screen>
  );
});
