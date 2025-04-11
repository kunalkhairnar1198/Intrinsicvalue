import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SummaryScreen from '../../screens/detailscreen/SummaryScreen';
import ChartScreen from '../../screens/detailscreen/ChartScreen';
import FinancialsScreen from '../../screens/detailscreen/FinancialsScreen';
import NewsScreen from '../../screens/detailscreen/NewsScreen';

import responsive from '../../utils/responsive';
import {COLORS} from '../../constants/theme';
import RankScreen from '../../screens/detailscreen/RankScreen';

const Tab = createMaterialTopTabNavigator();

const DetailsToptabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 2,
          borderBottomColor: 'lightgray',
        },
        tabBarLabelStyle: {
          fontSize: responsive.width(10),
          fontWeight: 'bold',
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          height: responsive.height(3),
          borderRadius: responsive.width(4),
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {
          width: responsive.width(70),
        },
        tabBarScrollEnabled: true,
        lazy: true,
      }}>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Chart" component={ChartScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="Financial" component={FinancialsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default DetailsToptabNavigation;
