import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const CustomeHeader = () => {

  const BottomTab = createBottomTabNavigator()

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen/>
    </BottomTab.Navigator>
  );
};

export default CustomeHeader;
