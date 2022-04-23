import React from 'react';
import { SearchBar } from './src/components/SearchBar';
import { Screen } from './src/components/Screen';
import { BreakingNews } from './src/components/BreakingNews';
import { FeaturedNews } from './src/components/FeaturedNews';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { Home } from './src/components/Home';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Screen>
        <SearchBar />
        <FeaturedNews />
        <BreakingNews />
        <Stack.Navigator>
          <Stack.Screen name="Home" getComponent={() => require('./src/components/Home').Home} />
        </Stack.Navigator>
      </Screen>
    </NavigationContainer>
  );
};

export default App;
