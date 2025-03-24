import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ReferAndEarnScreen from '../../screens/drawerscreens/referandearnscreen/ReferAndEarnScreen';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';
import {COLORS} from '../../constants/theme';

const Stack = createStackNavigator();

const ReferAndEarnNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Referandearn" component={ReferAndEarnScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ReferAndEarnNavigator;
