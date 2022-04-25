import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/components/pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Weather } from './src/components/pages/Weather';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Weather" component={Weather} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
