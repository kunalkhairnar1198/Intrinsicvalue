import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const KiteConnectScreen = ({navigation}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title={'Kite Connect'} />

      <Text>KiteConnectScreen</Text>
    </View>
  );
};

export default KiteConnectScreen;
