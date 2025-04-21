import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {COLORS} from '../../constants/theme';

import responsive from '../../utils/responsive';

const Tab = createMaterialTopTabNavigator();

const CustomTopTabs = ({routes}) => {
  if (!routes || routes.length === 0) return null;

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
  };
  // console.log('top tabs', routes);

  return (
    <Tab.Navigator
      initialRouteName={routes[0].name}
      screenOptions={materialScreenOptions}>
      {routes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{tabBarLabel: route?.title}}
        />
      ))}
    </Tab.Navigator>
  );
};
export default CustomTopTabs;
