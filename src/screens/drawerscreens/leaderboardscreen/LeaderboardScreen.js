import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const LeaderboardScreen = ({navigation, route}) => {
  console.log('leader');
  return (
    <View>
      <CustomeHeader navigation={navigation} title={'Leaderboard'} />

      <Text>LeaderboardScreen</Text>
    </View>
  );
};

export default LeaderboardScreen;
