import React, {Fragment} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {COLORS} from '../../constants/theme';

import {routes, screens} from '../ScreenRoutes';
import responsive from '../../utils/responsive';

import HomeNavigator from '../BottomTabNavigators/HomeNavigator';
import WatchlistNavigator from '../BottomTabNavigators/WatchlistNavigator';
import AlgoTradeNavigator from '../BottomTabNavigators/AlgoTradeNavigator';
import PortfolioNavigator from '../BottomTabNavigators/PortfolioNavigator';
import InsightsNavigator from '../BottomTabNavigators/InsightsNavigator';
import LeaderBoardNavigator from '../DrawerScreenNavigators/LeaderBoardNavigator';
import MyStrategiesNavigator from '../DrawerScreenNavigators/MyStrategiesNavigator';
import ReferAndEarnNavigator from '../DrawerScreenNavigators/ReferAndEarnNavigator';
import SubscriptionNavigator from '../DrawerScreenNavigators/SubscriptionNavigator';
import KiteToConnectNavigator from '../DrawerScreenNavigators/KiteToConnectNavigator';

import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';

const BottomTab = createBottomTabNavigator();

const Bottomnavigation = ({route}) => {
  const BottomTabscreenOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name);

    if (!item) {
      console.warn(`No matching route found for: ${route.name}`);
      return {};
    }

    console.log(item?.title); // Safe console log

    if (!item.showInTab) {
      return {
        tabBarIcon: () => <View style={{width: 0}} />,
        headerShown: false,
        tabBarStyle: {
          height: responsive.height(60),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 5,
          shadowColor: '#080808',
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          backgroundColor: COLORS.white,
          paddingTop: responsive.padding(10),
        },
        tabBarItemStyle: {
          display: 'none',
        },
        title: item.title,
      };
    }

    return {
      title: item.title,
      headerShown: false,
      tabBarIcon: ({focused}) => item.icon(focused),
      tabBarStyle: {
        height: responsive.height(60),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 5,
        shadowColor: '#080808',
        shadowOffset: {width: 0, height: -4},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor: COLORS.white,
        paddingTop: responsive.padding(10),
      },
      tabBarLabel: ({focused}) => (
        <View style={{alignItems: 'center', padding: responsive.padding(5)}}>
          <Text
            style={{
              color: focused ? COLORS.primary : 'gray',
              bottom: 6,
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          {focused && (
            <View
              style={{
                width: '100%',
                height: responsive.height(3),
                backgroundColor: COLORS.primary,
                position: 'absolute',
                bottom: 4,
              }}
            />
          )}
        </View>
      ),
    };
  };

  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <BottomTab.Navigator screenOptions={BottomTabscreenOptions}>
        <BottomTab.Screen
          name={screens.HomeNavigator}
          component={HomeNavigator}
        />
        <BottomTab.Screen
          name={screens.WatchlistNavigator}
          component={WatchlistNavigator}
        />
        <BottomTab.Screen
          name={screens.AlgoTraderNavigator}
          component={AlgoTradeNavigator}
        />
        <BottomTab.Screen
          name={screens.PortfolioNavigator}
          component={PortfolioNavigator}
        />
        <BottomTab.Screen
          name={screens.InsightsNavigator}
          component={InsightsNavigator}
        />

        {/* //Drawer navigations routes */}
        <BottomTab.Screen
          name={screens.LeaderBoardNavigator}
          component={LeaderBoardNavigator}
        />
        <BottomTab.Screen
          name={screens.MyStrategiesNavigator}
          component={MyStrategiesNavigator}
        />
        <BottomTab.Screen
          name={screens.ReferAndEarnNavigator}
          component={ReferAndEarnNavigator}
        />
        <BottomTab.Screen
          name={screens.SubscriptionNavigator}
          component={SubscriptionNavigator}
        />
        <BottomTab.Screen
          name={screens.KiteToConnectNavigator}
          component={KiteToConnectNavigator}
        />
      </BottomTab.Navigator>
    </Fragment>
  );
};

export default Bottomnavigation;
