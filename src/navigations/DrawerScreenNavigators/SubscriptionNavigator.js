import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SubscriptionScreen from '../../screens/drawerscreens/subscriptionscreen/SubscriptionScreen';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';
import {COLORS} from '../../constants/theme';

const Stack = createStackNavigator();

const SubscriptionNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      </Stack.Navigator>
    </>
  );
};

export default SubscriptionNavigator;
