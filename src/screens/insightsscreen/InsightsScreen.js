import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../components/Header/CustomeHeader';

const InsightsScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title={route.name} />

      <Text>InsightsScreen</Text>
    </View>
  );
};

export default InsightsScreen;
