import React, {useContext, useState} from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';

import {TabContext} from '../../context-api/MaterialTopTabContext';

import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

import Button from '../Button/Button';

import CustomBottomSheetModal from '../BottomSheet/CustomBottomSheetModal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CandleStickIcon} from '../../assets/SVG/appiconsvg/Icons';
import {
  formatAmount,
  formatPercentage,
} from '../../utils/calculations/FormatAmountPercentage';
import {useNavigation} from '@react-navigation/native';

const WatchlistBottomComponent = () => {
  const navigation = useNavigation();
  const {watchbottomSheetModalRef} = useContext(TabContext);
  const {watchlistItem} = useSelector(state => state.dashboard);
  // console.log(watchlistItem);
  const [selectedValue, setSelectedValue] = useState(null);

  const watchlistOptions = [
    {label: 'Watchlist 1', value: 'watchlist1'},
    {label: 'Watchlist 2', value: 'watchlist2'},
    {label: 'Watchlist 3', value: 'watchlist3'},
  ];

  const handleNavigation = () => {
    navigation.navigate('Detail', {item: watchlistItem});
    watchbottomSheetModalRef.current?.close();
  };

  return (
    <CustomBottomSheetModal
      bottomSheetRef={watchbottomSheetModalRef}
      snapPoints={['70%', '60%']}>
      <View style={styles.container}>
        {/* Title and Percentage */}
        <View style={styles.rowBetween}>
          <Text style={styles.title}>
            {watchlistItem?.name || 'Stock Title'}
          </Text>

          <View>
            <Text
              style={[
                styles.percentage,
                {color: watchlistItem?.NSE_CHANGE < 0 ? 'red' : 'green'},
              ]}>
              <Text style={styles.subText}>Change :</Text>
              {formatPercentage(watchlistItem?.NSE_CHANGE || 'NA')}
            </Text>
          </View>
        </View>

        {/* Stock Name and Value */}
        <View style={styles.stockRow}>
          <Text style={styles.stockName}>
            {watchlistItem?.symbol || 'Stock Name'}
          </Text>
          <Text style={styles.stockValue}>
            <Text style={styles.subText}>VALUE (₹ Lakhs) :</Text>
            {formatAmount(watchlistItem?.NSE_VALUE || '5.2L')}
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Add to Watchlist dropdown */}
        <Dropdown
          style={styles.dropdown}
          data={watchlistOptions}
          labelField="label"
          valueField="value"
          placeholder="Select Watchlist"
          placeholderStyle={{color: 'white', fontSize: 14}}
          selectedTextStyle={{color: 'white', fontSize: 14, fontWeight: 'bold'}}
          dropdownStyle={styles.dropdownStyle}
          value={selectedValue}
          onChange={item => setSelectedValue(item.value)}
        />

        {/* Stock Details */}
        <View style={styles.stockDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Open (₹)</Text>
            <Text style={styles.detailValue}>
              {watchlistItem?.NSE_Open || '1000'}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>High (₹)</Text>
            <Text style={styles.detailValue}>
              {watchlistItem?.NSE_High || '1050'}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Low (₹)</Text>
            <Text style={styles.detailValue}>
              {watchlistItem?.NSE_Low || '980'}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Prev Close (₹)</Text>
            <Text style={styles.detailValue}>
              {watchlistItem?.NSE_PREV_PRICE || '995'}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>LTP (₹)</Text>
            <Text style={styles.detailValue}>
              {watchlistItem?.NSE_LTP || '1020'}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Volume (₹)</Text>
            <Text style={styles.detailValue}>
              {formatAmount(watchlistItem?.NSE_VOLUME || '5.4M')}
            </Text>
          </View>
        </View>

        {/* View Chart Button */}
        <Button style={styles.chartButton} onPress={handleNavigation}>
          <CandleStickIcon size={25} color="#fff" />
          <Text style={styles.chartText}>View Chart</Text>
          <Icon name="arrow-right" size={25} color="#fff" style={styles.icon} />
        </Button>
      </View>
    </CustomBottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsive.padding(16),
    backgroundColor: 'white',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsive.margin(8),
  },
  title: {
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: responsive.fontSize(16),
    color: 'green',
  },
  subText: {
    color: 'gray',
    fontSize: responsive.fontSize(13),
    paddingRight: responsive.padding(5),
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: responsive.padding(8),
    marginBottom: responsive.margin(2),
  },
  stockName: {
    fontSize: responsive.fontSize(14),
  },
  stockValue: {
    fontSize: responsive.fontSize(13),
    fontWeight: 'bold',
  },
  divider: {
    height: responsive.height(1),
    backgroundColor: COLORS.primary,
    marginVertical: responsive.margin(10),
  },
  dropdown: {
    height: responsive.height(40),
    borderRadius: responsive.borderRadius(5),
    backgroundColor: COLORS.primary,
    marginBottom: responsive.margin(12),
    paddingVertical: responsive.padding(10),
    paddingHorizontal: responsive.padding(20),
    alignSelf: 'center',
    width: responsive.width(150),
  },
  dropdownStyle: {
    backgroundColor: 'white',
  },
  stockDetails: {
    marginBottom: responsive.margin(12),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsive.padding(4),
  },
  detailLabel: {
    fontSize: responsive.fontSize(13),
    color: '#555',
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: responsive.fontSize(13),
    fontWeight: 'bold',
    color: COLORS.black,
    fontWeight: '700',
  },
  chartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: responsive.padding(5),
    borderRadius: responsive.borderRadius(5),
    width: responsive.width(200),
    alignSelf: 'center',
  },
  icon: {
    margin: responsive.margin(4),
  },
  chartText: {
    color: 'white',
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
    marginLeft: responsive.margin(10),
  },
});

export default WatchlistBottomComponent;
