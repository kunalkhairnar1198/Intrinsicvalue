import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const AddFtsmStrategyscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomeHeader
        navigation={navigation}
        title="Add FTSM Strategy"
        goBack="goBack"
      />
      <Text>AddFtsmStrategyscreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AddFtsmStrategyscreen;
