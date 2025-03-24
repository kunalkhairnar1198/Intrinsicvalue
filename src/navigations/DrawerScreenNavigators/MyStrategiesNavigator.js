import {createStackNavigator} from '@react-navigation/stack';
import MyStrategiesScreen from '../../screens/drawerscreens/mystrategiesscreen/MyStrategiesScreen';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';

const Stack = createStackNavigator();

const MyStrategiesNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="My Strategies" component={MyStrategiesScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MyStrategiesNavigator;
