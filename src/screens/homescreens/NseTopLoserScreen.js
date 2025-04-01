import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NseTopGainers from '../../assets/NiftyData/NseTopGainerLooser.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';

const NseTopLoserScreen = ({navigation}) => {
  const {looser} = NseTopGainers;
  console.log(NseTopGainers);
  return (
    <View style={styles.container}>
      <FlatlistComponent
        data={looser}
        navigation={navigation}
        table={'isTable'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default NseTopLoserScreen;
