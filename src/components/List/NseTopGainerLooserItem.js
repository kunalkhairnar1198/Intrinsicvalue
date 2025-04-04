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
import {setWathlistItem} from '../../store/dashboard/sortSlice/dashboardslice';

const NseTopGainerLooserItem = ({item, navigation}) => {
  const dispatch = useDispatch();
  const {watchbottomSheetModalRef} = useContext(TabContext);
  const selectedItems = useSelector(state => state.selection.selectedItems);

  // console.log('nse top gainers', selectedItems);

  const handleCheckboxPress = () => {
    const obj = {
      ...item,
      id: item.symbol || `${item.name}-${item.NSE_UPD_TIME}`,
    };

    dispatch(toggleItem(obj));
    // console.log('Toggled Item:', obj);
  };

  const handlePresentModalPress = () => {
    watchbottomSheetModalRef.current?.present();
    dispatch(setWathlistItem(item));
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
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.symbol}</Text>
              </View>

              <View style={{justifyContent: 'center'}}>
                <Text style={styles.closeText}>₹ {item.NSE_LTP}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: item.Change >= 0 ? 'green' : 'red',
                  }}>
                  {item.Change >= 0
                    ? `+${item.NSE_CHANGE}%`
                    : `${item.NSE_CHANGE}%`}
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
