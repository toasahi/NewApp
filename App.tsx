import React from 'react';
import { SearchBar } from './src/components/SearchBar';
import { Screen } from './src/components/Screen';
import { FeaturedNews } from './src/components/FeaturedNews';

const App = () => {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
    </Screen>
  );
};

export default App;
