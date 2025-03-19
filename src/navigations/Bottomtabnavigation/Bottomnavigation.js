import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import responsive from '../../utils/responsive';
import {COLORS} from '../../constants/theme';

import {
  AlgoTradeIcon,
  Homeicon,
  InsightIcon,
  PortfolioIcon,
  WatchlistIcon,
} from '../../assets/SVG/appiconsvg/LeaderBoardIcon';

import HomeScreen from '../../screens/homescreens/HomeScreen';
import WathlistScreen from '../../screens/watchlistscreen/WathlistScreen';
import AlgotradersScreen from '../../screens/algotradersscreen/AlgotradersScreen';
import PortfolioScreen from '../../screens/portfolioscreen/PortfolioScreen';
import InsightsScreen from '../../screens/insightsscreen/InsightsScreen';
import CustomBottomTabNavigation from './CustomBottomTabNavigation';

const BottomTab = createBottomTabNavigator();

const Bottomnavigation = ({route}) => {
  const screenOptions = ({route}) => ({
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
      shadowColor: '#000',
      shadowOffset: {width: 0, height: -3},
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    tabBarLabelStyle: {
      fontSize: responsive.fontSize(14),
      fontFamily: 'Inter',
      fontWeight: '400',
    },
    tabBarLabel: ({focused}) => (
      <View style={{alignItems: 'center'}}>
        <Text style={{color: focused ? COLORS.primary : 'gray'}}>
          {route.name}
        </Text>
        {focused && (
          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              bottom: -5,
            }}
          />
        )}
      </View>
    ),
    tabBar: props => <CustomBottomTabNavigation {...props} />,
  });

  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={route.params?.screen || HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => <Homeicon color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WathlistScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <WatchlistIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Algotrader"
        component={AlgotradersScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <AlgoTradeIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <PortfolioIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <InsightIcon color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const style = StyleSheet.create({
  tabBarStyle: {
    height: responsive.height(60),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default Bottomnavigation;
