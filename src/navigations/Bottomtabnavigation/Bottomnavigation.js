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

const BottomTab = createBottomTabNavigator();

const tabBarStyle = {
  height: responsive.height(60),
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  // position: 'absolute',
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
};

const Bottomnavigation = () => {
  const BottomTabscreenOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name);
    // console.log(item);
    return {
      title: item.title,
      headerShown: false,
      tabBarIcon: ({focused}) => item.icon(focused),
      tabBarStyle,
      tabBarLabel: ({focused}) => (
        <View style={{alignItems: 'center', padding: responsive.padding(5)}}>
          <Text
            style={{
              color: focused ? COLORS.primary : 'gray',
              bottom: 6,
              fontWeight: 'bold',
              fontSize: responsive.fontSize(10),
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
    </BottomTab.Navigator>
  );
};

export default Bottomnavigation;
