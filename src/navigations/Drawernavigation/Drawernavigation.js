import React, {Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {screens} from '../ScreenRoutes';
import {COLORS} from '../../constants/theme';

import CustomDrawer from './CustomeDrawer';
import Bottomnavigation from '../Bottomtabnavigation/Bottomnavigation';
import LeaderBoardNavigator from '../DrawerScreenNavigators/LeaderBoardNavigator';
import MyStrategiesNavigator from '../DrawerScreenNavigators/MyStrategiesNavigator';
import ReferAndEarnNavigator from '../DrawerScreenNavigators/ReferAndEarnNavigator';
import SubscriptionNavigator from '../DrawerScreenNavigators/SubscriptionNavigator';
import KiteToConnectNavigator from '../DrawerScreenNavigators/KiteToConnectNavigator';
import AccountNavigator from '../DrawerScreenNavigators/AccountNavigator';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';

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
  });

  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.white}
        hidden={false}
      />
      <DrawerStack.Navigator
        screenOptions={screenOptions}
        // initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <DrawerStack.Screen
          name={screens.HomeTabs}
          component={Bottomnavigation}
          options={{
            title: 'Home',
          }}
        />

        <DrawerStack.Screen
          name={screens.LeaderBoardNavigator}
          component={LeaderBoardNavigator}
        />
        <DrawerStack.Screen
          name={screens.MyStrategiesNavigator}
          component={MyStrategiesNavigator}
        />
        <DrawerStack.Screen
          name={screens.ReferAndEarnNavigator}
          component={ReferAndEarnNavigator}
        />
        <DrawerStack.Screen
          name={screens.SubscriptionNavigator}
          component={SubscriptionNavigator}
        />
        <DrawerStack.Screen
          name={screens.KiteToConnectNavigator}
          component={KiteToConnectNavigator}
        />
        <DrawerStack.Screen
          name={screens.AccountDetailsNavigator}
          component={AccountNavigator}
          options={{
            title: 'Account Details',
          }}
        />
      </DrawerStack.Navigator>
    </Fragment>
  );
};

export default Drawernavigation;
