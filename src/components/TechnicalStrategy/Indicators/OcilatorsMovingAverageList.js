import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import responsive from '../../../utils/responsive';
import MovingAvgAndOscilatorsItem from './MovingAvgAndOscilatorsItem';
import {COLORS} from '../../../constants/theme';

const OcilatorsMovingAverageList = ({
  indicators,
  title,
  onToggleOscillator,
  onToggleMovingAverage,
  selectedOscillators,
  selectedMovingAverages,
}) => {
  console.log(indicators);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={indicators}
        renderItem={({item}) => {
          return (
            <MovingAvgAndOscilatorsItem
              item={item}
              onToggleOscillator={onToggleOscillator}
              selectedOscillators={selectedOscillators}
              onToggleMovingAverage={onToggleMovingAverage}
              selectedMovingAverages={selectedMovingAverages}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: responsive.padding(15),
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: responsive.fontSize(13),
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default OcilatorsMovingAverageList;
