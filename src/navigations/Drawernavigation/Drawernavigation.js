import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import LeaderboardScreen from '../../screens/drawerscreens/leaderboardscreen/LeaderboardScreen';
import MyStrategiesScreen from '../../screens/drawerscreens/mystrategiesscreen/MyStrategiesScreen';
import ReferAndEarnScreen from '../../screens/drawerscreens/referandearnscreen/ReferAndEarnScreen';
import SubscriptionScreen from '../../screens/drawerscreens/subscriptionscreen/SubscriptionScreen';
import KiteConnectScreen from '../../screens/drawerscreens/kitconnectscreen/KiteConnectScreen';

import CustomeDrawer from './CustomeDrawer';
// import Bottomnavigation from '../Bottomtabnavigation/Bottomnavigation';
import CustomeHeader from '../../components/Header/CustomeHeader';
import HomeScreen from '../../screens/homescreens/HomeScreen';
import Bottomnavigation from '../Bottomtabnavigation/Bottomnavigation';

const DrawerStack = createDrawerNavigator();
const Stack = createStackNavigator();

const Drawernavigation = () => {
  const screenOptions = ({navigation, route}) => ({
    headerShown: false,
    drawerActiveBackgroundColor: 'black',
    drawerStyle: {
      backgroundColor: 'white',
      width: 300,
    },
    drawerActiveTintColor: 'red',
    drawerInactiveTintColor: 'black',
    // header: () => <CustomeHeader navigation={navigation} title={route.name} />,
  });

  return (
    <>
      <StatusBar hidden={false} />
      <DrawerStack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
        drawerContent={props => <CustomeDrawer {...props} />}>
        <DrawerStack.Screen
          name="Home"
          // component={LeaderboardScreen}
        >
          {() => <DrawerScreensWithTabs component={HomeScreen} />}
        </DrawerStack.Screen>

        <DrawerStack.Screen
          name="Leaderboardscreen"
          // component={LeaderboardScreen}
        >
          {() => <DrawerScreensWithTabs component={LeaderboardScreen} />}
        </DrawerStack.Screen>

        <DrawerStack.Screen
          name="Mystratergiesscreen"
          // component={MyStrategiesScreen}
        >
          {() => <DrawerScreensWithTabs component={MyStrategiesScreen} />}
        </DrawerStack.Screen>

        <DrawerStack.Screen
          name="Referandearnscreen"
          // component={ReferAndEarnScreen}
        >
          {() => <DrawerScreensWithTabs component={ReferAndEarnScreen} />}
        </DrawerStack.Screen>

        <DrawerStack.Screen
          name="Subscriptionscreen"
          // component={SubscriptionScreen}
        >
          {() => <DrawerScreensWithTabs component={SubscriptionScreen} />}
        </DrawerStack.Screen>

        <DrawerStack.Screen
          name="Kiteconnectscreen"
          // component={KiteConnectScreen}
        >
          {() => <DrawerScreensWithTabs component={KiteConnectScreen} />}
        </DrawerStack.Screen>
      </DrawerStack.Navigator>
    </>
  );
};

export default Drawernavigation;

const DrawerScreensWithTabs = ({component}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // header: () => (
        //   <CustomeHeader navigation={navigation} title={route.name} />
        // ),
      }}>
      <Stack.Screen
        name="Tabs"
        component={Bottomnavigation}
        initialParams={{screen: component}}
      />
    </Stack.Navigator>
  );
};
