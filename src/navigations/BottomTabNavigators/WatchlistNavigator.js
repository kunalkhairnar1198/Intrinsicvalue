import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WathlistScreen from '../../screens/watchlistscreen/WathlistScreen';

const Stack = createStackNavigator();

const WatchlistNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Watchlist" component={WathlistScreen} />
    </Stack.Navigator>
  );
};

export default WatchlistNavigator;
