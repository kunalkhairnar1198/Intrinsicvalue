import React from 'react';
import {View, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';
import FocusAwareStatusBar from '../../../components/Statusbar/FocustAwareStatusBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../../constants/theme';

const LeaderboardScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();

  console.log('leader');
  return (
    <View>
      <CustomeHeader navigation={navigation} title={route.name} />
      <Text>LeaderboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LeaderboardScreen;
