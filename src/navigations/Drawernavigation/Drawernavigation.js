import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StatusBar} from 'react-native';
import {screens} from '../ScreenRoutes';

import Bottomnavigation from '../Bottomtabnavigation/Bottomnavigation';
import CustomDrawer from './CustomeDrawer';
import CustomeHeader from '../../components/Header/CustomeHeader';

const DrawerStack = createDrawerNavigator();

const Drawernavigation = () => {
  const screenOptions = ({navigation, route}) => ({
    headerShown: false,
    drawerActiveBackgroundColor: 'black',
    drawerStyle: {
      backgroundColor: 'white',
      width: 300,
    },
    drawerType: 'front',
    drawerActiveTintColor: 'red',
    drawerInactiveTintColor: 'black',
    // header: () => <CustomeHeader navigation={navigation} title={route.name} />,
  });

  return (
    <>
      <StatusBar hidden={false} />
      <DrawerStack.Navigator
        screenOptions={screenOptions}
        drawerContent={props => <CustomDrawer {...props} />}>
        <DrawerStack.Screen
          name={screens.HomeTabs}
          component={Bottomnavigation}
          options={{
            title: 'Home',
          }}
        />
      </DrawerStack.Navigator>
    </>
  );
};

export default Drawernavigation;
