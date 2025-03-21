import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import InsightsScreen from '../../screens/insightsscreen/InsightsScreen';

const Stack = createStackNavigator();

const InsightsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Insights" component={InsightsScreen} />
    </Stack.Navigator>
  );
};

export default InsightsNavigator;
