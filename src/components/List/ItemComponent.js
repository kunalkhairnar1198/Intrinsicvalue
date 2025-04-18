import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {TabContext} from '../../context-api/MaterialTopTabContext';
import {COLORS} from '../../constants/theme';

import LinearGradient from 'react-native-linear-gradient';

import responsive from '../../utils/responsive';
import CustomCard from '../UI/Card';

import companyIndices from '../../assets/NiftyData/CompanyIndices.json';
import {
  formatAmount,
  formatPercentage,
} from '../../utils/calculations/FormatAmountPercentage';

const ItemComponent = ({item, navigation}) => {
  const {handleItemClick, toggleLoader} = useContext(TabContext);
  const {results} = companyIndices;
  // console.log(results);
  // const dispatch = useDispatch();
  // const selectedItems = useSelector(state => state.selection.selectedItems);

  // const handleCheckboxPress = () => {
  //   dispatch(toggleItem(item));
  // };

  const handleItemPress = item => {
    handleItemClick(item, navigation);

    setTimeout(() => {
      navigation.navigate('Dynamicscreen', {items: results});
      toggleLoader();
    }, 10);
  };

  return (
    <CustomCard style={styles.cardContainer}>
      <LinearGradient
        colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0.5}}
        style={styles.gradientContainer}>
        {/* <View style={styles.container}>
          <View style={styles.checkBox}>
            <CustomCheckBox
              isChecked={selectedItems.some(
                selected => selected.id === item.id,
              )}
              onPress={handleCheckboxPress}
            />
          </View> */}

        <View style={styles.contentRow}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Pressable onPress={() => handleItemPress(item)}>
              <Text style={styles.title}>{item.indices_name}</Text>
            </Pressable>
            <Text style={styles.description}>{item.Symbol}</Text>
          </View>

          <View style={{justifyContent: 'center'}}>
            <Text style={styles.closeText}>₹ {formatAmount(item.Close)}</Text>
            <Text
              style={{
                fontSize: 16,
                color: item.Change < 0 ? 'green' : 'red',
              }}>
              {item.Change < 0
                ? `${formatPercentage(item.Change)}`
                : `${formatPercentage(item.Change)}`}
            </Text>
          </View>
        </View>
        {/* </View> */}
      </LinearGradient>
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

export default ItemComponent;
