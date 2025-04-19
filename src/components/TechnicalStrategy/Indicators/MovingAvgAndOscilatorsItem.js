import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import responsive from '../../../utils/responsive';
import CustomCheckBox from '../../CheckBox/CustomCheckBox';

const MovingAvgAndOscilatorsItem = ({
  item,
  onToggleOscillator,
  selectedOscillators = [],
  onToggleMovingAverage,
  selectedMovingAverages = [],
}) => {
  const handleCheckBoxPress = () => {
    if (item.indicator_type === 'Oscillators') {
      onToggleOscillator(item);
    } else if (item.indicator_type === 'Moving Averages') {
      onToggleMovingAverage(item);
    }
  };

  const isChecked =
    item.indicator_type === 'Oscillators'
      ? selectedOscillators?.some(selected => selected?.id === item?.id)
      : selectedMovingAverages?.some(selected => selected?.id === item?.id);

  return (
    <View style={styles.container}>
      <CustomCheckBox onPress={handleCheckBoxPress} isChecked={isChecked} />
      <Text style={styles.mainText}>
        {item.alternate_indicator_name}
        <Text style={styles.subText}> ({item.indicator_full_name})</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: responsive.fontSize(13),
  },
  subText: {
    fontWeight: 'normal',
    fontSize: responsive.fontSize(12),
    color: 'black',
  },
});

export default MovingAvgAndOscilatorsItem;
