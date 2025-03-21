import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PortfolioScreen from '../../screens/portfolioscreen/PortfolioScreen';

const Stack = createStackNavigator();

const PortfolioNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
    </Stack.Navigator>
  );
};

export default PortfolioNavigator;
