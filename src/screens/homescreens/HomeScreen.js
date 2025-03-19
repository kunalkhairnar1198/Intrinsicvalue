import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../components/Header/CustomeHeader';

const HomeScreen = ({navigation, route}) => {
  console.log('homescreen');
  return (
    <View>
      <CustomeHeader navigation={navigation} title={route.name} />

      <Text>Home data</Text>
    </View>
  );
};

export default HomeScreen;
