import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../components/Header/CustomeHeader';

const PortfolioScreen = ({navigation, route}) => {
  return (
    <View>
      <CustomeHeader navigation={navigation} title={route.name} />

      <Text>PortfolioScreen</Text>
    </View>
  );
};

export default PortfolioScreen;
