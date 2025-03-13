import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../../screens/welcomescreen/Welcomescreen';
import Loginscreen from '../../screens/authscreens/Loginscreen';
import Registerscreen from '../../screens/authscreens/Registerscreen';
import EmailVerificationScreen from '../../screens/authscreens/Emailverificationscreen';
import Forgetpasswordscreen from '../../screens/authscreens/Forgetpasswordscreen';

const Stack = createStackNavigator();

const Rootnavigation = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName="Welcomescreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="Welcomescreen" component={WelcomeScreen} />
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="Registerscreen" component={Registerscreen} />
      <Stack.Screen
        name="Emailverfiyscreen"
        component={EmailVerificationScreen}
      />
      <Stack.Screen name='ForgetScreen' component={Forgetpasswordscreen}/>
    </Stack.Navigator>
  );
};

export default Rootnavigation;
