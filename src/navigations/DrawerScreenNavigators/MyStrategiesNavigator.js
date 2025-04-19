import {createStackNavigator} from '@react-navigation/stack';
import MyStrategiesScreen from '../../screens/drawerscreens/mystrategiesscreen/MyStrategiesScreen';
import AddTechnicalStrategyscreen from '../../screens/drawerscreens/mystrategiesscreen/AddTechnicalStrategyscreen';
import AddFtsmStrategyscreen from '../../screens/drawerscreens/mystrategiesscreen/AddFtsmStrategyscreen';

const Stack = createStackNavigator();

const MyStrategiesNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Mystrategies" component={MyStrategiesScreen} />
        <Stack.Screen
          name="Addstrategies"
          component={AddTechnicalStrategyscreen}
        />

        <Stack.Screen name="Ftsmstrategies" component={AddFtsmStrategyscreen} />
      </Stack.Navigator>
    </>
  );
};

export default MyStrategiesNavigator;
