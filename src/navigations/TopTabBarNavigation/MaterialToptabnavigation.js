import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useContext, useEffect, useRef} from 'react';
import {TabContext} from '../../context-api/MaterialTopTabContext';

import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

import NseIndicesScreen from '../../screens/homescreens/NseIndicesScreen';
import NseTopGainerScreen from '../../screens/homescreens/NseTopGainerScreen';
import NseTopLoserScreen from '../../screens/homescreens/NseTopLoserScreen';
import DynamicTabScreen from '../../screens/homescreens/DynamicTabScreen';

const Tab = createMaterialTopTabNavigator();

const MaterialToptabnavigation = ({setActiveTab}) => {
  const {dynamicTab} = useContext(TabContext);

  const materialScreenOptions = {
    tabBarStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 2,
      borderBottomColor: 'lightgray',
      backgroundColor: 'white',
    },
    tabBarLabelStyle: {
      fontSize: responsive.width(12),
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
    tabBarScrollEnabled: true,
    tabBarItemStyle: {
      width: responsive.width(120),
    },
  };

  return (
    <Tab.Navigator
      screenOptions={materialScreenOptions}
      screenListeners={{
        state: e => {
          const index = e.data.state.index;
          const routes = e.data.state.routeNames;
          setActiveTab(routes[index]);
        },
      }}>
      <Tab.Screen
        name="NseIndices"
        component={NseIndicesScreen}
        options={{title: 'NSE Indices'}}
      />
      <Tab.Screen
        name="NseTopGainer"
        component={NseTopGainerScreen}
        options={{title: 'NSE Top Gainer'}}
      />
      <Tab.Screen
        name="NseTopLoser"
        component={NseTopLoserScreen}
        options={{title: 'NSE Top Loser'}}
      />

      {dynamicTab && (
        <Tab.Screen
          name="Dynamicscreen"
          component={DynamicTabScreen}
          options={{tabBarLabel: dynamicTab?.name || 'Dynamic'}}
        />
      )}
    </Tab.Navigator>
  );
};

export default MaterialToptabnavigation;
