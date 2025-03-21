import {createStackNavigator} from '@react-navigation/stack';
import MyStrategiesScreen from '../../screens/drawerscreens/mystrategiesscreen/MyStrategiesScreen';

const Stack = createStackNavigator();

const MyStrategiesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyStrategies" component={MyStrategiesScreen} />
    </Stack.Navigator>
  );
};

export default MyStrategiesNavigator;
