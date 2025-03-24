import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const ReferAndEarnScreen = ({navigation}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title="Refer and Earn" />

      <Text>ReferAndEarnScreen</Text>
    </View>
  );
};

export default ReferAndEarnScreen;
