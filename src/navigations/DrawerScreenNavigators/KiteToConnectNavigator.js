import {createStackNavigator} from '@react-navigation/stack';
import KiteConnectScreen from '../../screens/drawerscreens/kitconnectscreen/KiteConnectScreen';

const Stack = createStackNavigator();

const KiteToConnectNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="KiteToConnect" component={KiteConnectScreen} />
    </Stack.Navigator>
  );
};

export default KiteToConnectNavigator;
