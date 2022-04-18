import React from 'react';
import { SearchBar } from './src/components/SearchBar';
import { Screen } from './src/components/Screen';
import { BreakingNews } from './src/components/BreakingNews';
import { FeaturedNews } from './src/components/FeaturedNews';
// import { SmallCard } from './src/components/SmallCard';

const App = () => {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
      <BreakingNews />
    </Screen>
  );
};

export default App;
