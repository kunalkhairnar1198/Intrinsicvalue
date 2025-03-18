import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';

import LeaderboardScreen from '../../screens/drawerscreens/leaderboardscreen/LeaderboardScreen';
import MyStrategiesScreen from '../../screens/drawerscreens/mystrategiesscreen/MyStrategiesScreen';
import ReferAndEarnScreen from '../../screens/drawerscreens/referandearnscreen/ReferAndEarnScreen';
import SubscriptionScreen from '../../screens/drawerscreens/subscriptionscreen/SubscriptionScreen';
import KiteConnectScreen from '../../screens/drawerscreens/kitconnectscreen/KiteConnectScreen';
import CustomeDrawer from './CustomeDrawer';
import { Text } from 'react-native-paper';


const DrawerStack = createDrawerNavigator();

const Drawernavigation = () => {
  
  const screenOptions ={
    // headerShown:false,
    drawerActiveBackgroundColor: 'black',
    drawerStyle: {
      backgroundColor: 'white',
      width: 300,
    },
    drawerActiveTintColor: 'red',
    drawerInactiveTintColor: 'black',
  }

  return (
    <>
     <StatusBar hidden={false} />
    <DrawerStack.Navigator screenOptions={screenOptions} drawerContent={(props)=><CustomeDrawer {...props}/>}> 
        <DrawerStack.Screen name='Leaderboardscreen' component={LeaderboardScreen}
        options={{
          drawerLabel: ({size, color}) => {
            return <Text style={{color: color, fontSize: 20}}>{'Leaderboardscreen'}</Text>;
          },
        }}
        />
        <DrawerStack.Screen name='Mystratergiesscreen' component={MyStrategiesScreen}/>
        <DrawerStack.Screen name='Referandearnscreen' component={ReferAndEarnScreen}/>
        <DrawerStack.Screen name='Subscriptionscreen' component={SubscriptionScreen}/>
        <DrawerStack.Screen name='Kiteconnectscreen' component={KiteConnectScreen}/>
    </DrawerStack.Navigator>
    </>
  )
}

export default Drawernavigation