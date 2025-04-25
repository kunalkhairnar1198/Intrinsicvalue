import React, {useContext, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TabContext} from '../../context-api/MaterialTopTabContext';
import {COLORS} from '../../constants/theme';

import LinearGradient from 'react-native-linear-gradient';

import responsive from '../../utils/responsive';
import CustomCard from '../UI/Card';
import RedirectIcon from 'react-native-vector-icons/FontAwesome5';

import {formatNumberToIndianStandard} from '../../utils/calculations/FormatAmountPercentage';
import {useSelector} from 'react-redux';

const ItemComponent = ({item, navigation}) => {
  const {setDynamicTab, dynamicTab, toggleLoader} = useContext(TabContext);
  const {dynamicData} = useSelector(state => state.dashboard);

  const {id, Symbol, indices_name, Close, Change, Per_Change} = item;
  const name = indices_name || Symbol;

  const handleItemPress = () => {
    // console.log(Symbol, 'clicked symbol  update the state 1');
    setDynamicTab(Symbol);

    setTimeout(() => {
      // console.log(
      //   'After the 0 mili second redirect dynamic tab screen using symbol 2',
      //   dynamicTab,
      // );
      navigation.navigate('Dynamicscreen', {dynamicData: dynamicData});
      toggleLoader();
    }, 0);
  };

  const changeValue = !isNaN(Change) ? Number(Change).toFixed(2) : Change;
  const percentChange = !isNaN(Per_Change)
    ? `${Number(Per_Change).toFixed(2)}%`
    : Per_Change;
  const isPositive = Number(Change) > 0;

  return (
    <CustomCard style={styles.cardContainer}>
      <LinearGradient
        colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0.5}}
        style={styles.gradientContainer}>
        <View style={styles.contentRow}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.title}>{name}</Text>

            <View style={styles.redirectContent}>
              <Text style={styles.description}>{Symbol}</Text>

              <TouchableOpacity onPress={handleItemPress}>
                <RedirectIcon
                  name="share-square"
                  color={'gray'}
                  size={24}
                  style={styles.redirectIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{justifyContent: 'center'}}>
            <Text style={styles.closeText}>
              ₹ {formatNumberToIndianStandard(Close)}
            </Text>

            <Text style={styles.changeText}>
              <Text style={isPositive ? styles.green : styles.red}>
                {changeValue}
              </Text>
              <Text style={isPositive ? styles.green : styles.red}>
                (
                {isNaN(percentChange) ? (
                  percentChange
                ) : (
                  <Text>{percentChange}%</Text>
                )}
                )
              </Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: responsive.margin(4),
    height: responsive.height(85),
    borderRadius: responsive.borderRadius(10),
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  gradientContainer: {
    flex: 1,
    paddingVertical: responsive.padding(4),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(10),
    justifyContent: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: responsive.padding(8),
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
  redirectContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsive.margin(2),
    gap: responsive.margin(4),
  },
  redirectIcon: {
    marginLeft: responsive.margin(6),
  },
  closeText: {
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  changeText: {
    fontSize: responsive.fontSize(13),
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: responsive.margin(1),
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  checkBox: {
    marginVertical: responsive.margin(20),
  },
});

export default ItemComponent;
