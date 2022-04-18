import React from 'react';
import { SearchBar } from './src/components/SearchBar';
import { Screen } from './src/components/Screen';
import { FeaturedNews } from './src/components/FeaturedNews';
// import { SmallCard } from './src/components/SmallCard';

const App = () => {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
      {/*<SmallCard />*/}
    </Screen>
  );
};

export default App;
