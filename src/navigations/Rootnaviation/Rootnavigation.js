import {createStackNavigator} from '@react-navigation/stack';

import Authnavigation from '../Authnavigation/Authnavigation';
import Drawernavigation from '../Drawernavigation/Drawernavigation';

import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const {isLoggedIn, token, emailId, firstName, lastName} = useSelector(
    state => state.auth,
  );

  console.log(isLoggedIn, token, emailId, firstName, lastName);
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      // initialRouteName="Authnavigation"
      screenOptions={screenOptions}>
      {isLoggedIn ? (
        <Stack.Screen name="Drawernavigation" component={Drawernavigation} />
      ) : (
        <Stack.Screen name="Authnavigation" component={Authnavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
