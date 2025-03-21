import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../components/Header/CustomeHeader';

const WathlistScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title={route.name} />
      <Text>WathlistScreen</Text>
    </View>
  );
};

export default WathlistScreen;
