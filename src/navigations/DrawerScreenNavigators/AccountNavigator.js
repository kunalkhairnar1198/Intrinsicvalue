import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AccountDetailsScreen from '../../screens/drawerscreens/accountdetailsscreen/AccountDetailsScreen';
import CustomeHeader from '../../components/Header/CustomeHeader';
import {StatusBar} from 'react-native';
import {COLORS} from '../../constants/theme';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';

const Stack = createStackNavigator();

const AccountNavigator = ({navigation}) => {
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
      </Stack.Navigator>
    </>
  );
};

export default AccountNavigator;
