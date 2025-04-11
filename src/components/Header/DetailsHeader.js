import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import responsive from '../../utils/responsive';
import {COLORS} from '../../constants/theme';
import {SingleLineIcon} from '../../assets/SVG/appiconsvg/Icons';
import {
  formatAmount,
  formatPercentage,
} from '../../utils/calculations/FormatAmountPercentage';

const DetailsHeader = ({navigation, item = {}, goBack}) => {
  const {
    name = 'Name',
    symbol = 'SYM',
    NSE_VALUE = '5.2L',
    NSE_CHANGE = 0,
  } = item;

  const handleBackPress = () => {
    if (goBack) navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            {name}
            <Text style={styles.symbolText}> ({symbol})</Text>
          </Text>

          <Text style={styles.valueText}>
            ₹ {formatAmount(NSE_VALUE)}{' '}
            <Text
              style={[
                styles.percentageText,
                {color: NSE_CHANGE < 0 ? 'red' : 'green'},
              ]}>
              {formatPercentage(NSE_CHANGE)}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <SingleLineIcon width={300} height={1} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsive.padding(10),
    backgroundColor: COLORS.white,
    elevation: 3,
  },
  backButton: {
    backgroundColor: '#ABC0FF',
    padding: responsive.padding(5),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsive.margin(10),
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  symbolText: {
    fontSize: responsive.fontSize(10),
    fontWeight: 'normal',
  },
  valueText: {
    fontSize: responsive.fontSize(13),
    marginTop: responsive.margin(2),
  },
  percentageText: {
    marginHorizontal: 25,
    fontSize: responsive.fontSize(12),
  },
  subText: {
    fontWeight: '600',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default DetailsHeader;
