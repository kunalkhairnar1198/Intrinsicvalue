import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import WelcomeScreen from '../../screens/welcomescreen/Welcomescreen';
import LoginScreen from '../../screens/authscreens/LoginScreen';
import RegisterScreen from '../../screens/authscreens/RegisterScreen';
import EmailVerificationScreen from '../../screens/authscreens/EmailVerificationScreen';
import ForgetpasswordScreen from '../../screens/authscreens/ForgetpasswordScreen';

const Stack = createStackNavigator();

const Authnavigation = () => {

    const screenOptions = {
        headerShown: false,
      };
    

  return (

    <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={screenOptions}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetpasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default Authnavigation;
