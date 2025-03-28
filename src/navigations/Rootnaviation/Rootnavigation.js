import {createStackNavigator} from '@react-navigation/stack';

import Authnavigation from '../Authnavigation/Authnavigation';
import Drawernavigation from '../Drawernavigation/Drawernavigation';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';
import {COLORS} from '../../constants/theme';
import {Fragment} from 'react';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName="Authnavigation"
      screenOptions={screenOptions}>
      <Stack.Screen name="Authnavigation" component={Authnavigation} />
      <Stack.Screen name="Drawernavigation" component={Drawernavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
