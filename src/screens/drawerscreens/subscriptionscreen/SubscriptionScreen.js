import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const SubscriptionScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title={'Subscription'} />

      <Text>SubscriptionScreen</Text>
    </View>
  );
};

export default SubscriptionScreen;
