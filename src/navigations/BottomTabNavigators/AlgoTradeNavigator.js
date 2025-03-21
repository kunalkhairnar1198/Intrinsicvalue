import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AlgotradersScreen from '../../screens/algotradersscreen/AlgotradersScreen';

const Stack = createStackNavigator();

const AlgoTradeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Algotrade" component={AlgotradersScreen} />
    </Stack.Navigator>
  );
};

export default AlgoTradeNavigator;
