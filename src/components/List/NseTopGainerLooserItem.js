import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants/theme';

import LinearGradient from 'react-native-linear-gradient';

import responsive from '../../utils/responsive';
import CustomCard from '../UI/Card';
import CustomCheckBox from '../CheckBox/CustomCheckBox';

import {useDispatch, useSelector} from 'react-redux';
import {toggleItem} from '../../store/selectSlice/select-slice';
import {TabContext} from '../../context-api/MaterialTopTabContext';
import {setWathlistItem} from '../../store/dashboard/dashboardslice';
import {formatNumberToIndianStandard} from '../../utils/calculations/FormatAmountPercentage';

const NseTopGainerLooserItem = ({item, navigation}) => {
  const dispatch = useDispatch();
  const {watchbottomSheetModalRef} = useContext(TabContext);
  const selectedItems = useSelector(state => state.selection.selectedItems);

  const {
    name,
    symbol,
    NSE_LTP,
    // NSE_VOLUME,
    // NSE_AVGPRICE,
    // NSE_Open,
    // NSE_High,
    // NSE_Low,
    // NSE_CLOSEPRICE,
    // NSE_VALUE,
    // NSE_PREV_PRICE,
    NSE_CHANGE,
    // NSE_PER_CHANGE,
    NSE_UPD_TIME,
    // PE_Ratio,
    // PEG_Ratio,
    // Growth_Rate,
    // TTM_EPS,
    // Prev_TTM_EPS,
  } = item;
  // console.log(name);

  // console.log('nse top gainers', selectedItems);

  const handleCheckboxPress = () => {
    const obj = {
      ...item,
      id: symbol || `${name}-${NSE_UPD_TIME}`,
    };

    dispatch(toggleItem(obj));
    // console.log('Toggled Item:', obj);
  };

  const handlePresentModalPress = item => {
    console.log('press open modal', item);
    if (item) {
      dispatch(setWathlistItem(item));
    }
    watchbottomSheetModalRef?.current.present();
  };

  return (
    <CustomCard style={styles.cardContainer}>
      <Pressable onPress={() => handlePresentModalPress(item)}>
        <LinearGradient
          colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.gradientContainer}>
          <View style={styles.container}>
            <View style={styles.checkBox}>
              <CustomCheckBox
                isChecked={selectedItems.some(
                  selected => selected.symbol === item.symbol,
                )}
                onPress={handleCheckboxPress}
              />
            </View>

            <View style={styles.contentRow}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{symbol}</Text>
              </View>

              <View style={{justifyContent: 'center'}}>
                <Text style={styles.closeText}>
                  ₹ {formatNumberToIndianStandard(NSE_LTP)}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: NSE_CHANGE < 0 ? 'red' : 'green',
                  }}>
                  {NSE_CHANGE < 0 ? `${NSE_CHANGE}%` : `${NSE_CHANGE}%`}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    paddingVertical: responsive.padding(4),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(10),
    height: responsive.height(85),
  },
  cardContainer: {
    marginVertical: responsive.margin(4),
    height: responsive.height(85),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-arround',
    flex: 1,
    paddingHorizontal: responsive.padding(5),
  },
  checkBox: {
    marginVertical: responsive.margin(20),
  },
  title: {
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  description: {
    fontSize: responsive.fontSize(13),
    color: COLORS.primary,
    marginTop: responsive.margin(1),
  },
  closeText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});

export default NseTopGainerLooserItem;
