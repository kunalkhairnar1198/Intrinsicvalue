import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/homescreens/HomeScreen';
import CustomeHeader from '../../components/Header/CustomeHeader';
import DetailScreen from '../../screens/detailscreen/DetailScreen';

const Stack = createStackNavigator();

const HomeNavigator = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
