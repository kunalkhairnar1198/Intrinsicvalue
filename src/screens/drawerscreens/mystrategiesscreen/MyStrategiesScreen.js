import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const MyStrategiesScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title="Startegy" />

      <Text>MyStrategiesScreen</Text>
    </View>
  );
};

export default MyStrategiesScreen;
