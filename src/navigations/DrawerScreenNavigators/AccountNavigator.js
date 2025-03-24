import {createStackNavigator} from '@react-navigation/stack';

import CustomeHeader from '../../components/Header/CustomeHeader';

import AccountDetailsScreen from '../../screens/drawerscreens/accountdetailsscreen/AccountDetailsScreen';
import SettingScreen from '../../screens/drawerscreens/accountdetailsscreen/SettingScreen';
import HelpScreen from '../../screens/drawerscreens/accountdetailsscreen/HelpScreen';
import FeedBackScreen from '../../screens/drawerscreens/accountdetailsscreen/FeedBackScreen';
import ChagnePasswordScreen from '../../screens/drawerscreens/accountdetailsscreen/ChagnePasswordScreen';

const Stack = createStackNavigator();

const AccountNavigator = ({navigation, route}) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: () => (
            <CustomeHeader
              navigation={navigation}
              title={'Account Details'}
              goBack={'goBack'}
            />
          ),
        }}>
        <Stack.Screen name="Accountdetail" component={AccountDetailsScreen} />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chagnepassword"
          component={ChagnePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Feedback"
          component={FeedBackScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AccountNavigator;
