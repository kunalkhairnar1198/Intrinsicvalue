import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const ChagnePasswordScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader
        navigation={navigation}
        title={route.name}
        goBack={'goBack'}
      />
      <Text>ChagnePasswordScreen</Text>
    </View>
  );
};

export default ChagnePasswordScreen;
