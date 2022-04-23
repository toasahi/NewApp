import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
