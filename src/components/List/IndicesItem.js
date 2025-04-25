import React, {useContext, memo} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import {formatNumberToIndianStandard} from '../../utils/calculations/FormatAmountPercentage';
import {useSelector} from 'react-redux';

import {TabContext} from '../../context-api/MaterialTopTabContext';

import responsive from '../../utils/responsive';
import CustomCard from '../UI/Card';
import Loader from '../Loader/Loader';

const IndicesItem = memo(({data, navigation}) => {
  const {setDynamicTab, toggleLoader} = useContext(TabContext);
  const {dynamicData} = useSelector(state => state.dashboard);

  if (!data) return null;

  const {Symbol, indices_name, Close, Change, Per_Change} = data;
  const name = indices_name || Symbol;

  if (!data) {
    return (
      <View style={styles.loaderContainer}>
        <Loader size="small" />
      </View>
    );
  }

  const handleItemPress = () => {
    // console.log(Symbol, 'clicked symbol  update the state 1');
    setDynamicTab(Symbol);

    setTimeout(() => {
      // console.log(
      //   'After the 0 mili second redirect dynamic tab screen using symbol 2',
      //   dynamicTab,
      // );
      navigation.navigate('Home', {
        screen: 'Dynamicscreen',
        params: {
          dynamicData: dynamicData,
        },
      });
      toggleLoader();
    }, 0);
  };

  const changeValue = !isNaN(Change) ? Number(Change).toFixed(2) : Change;
  const percentChange = !isNaN(Per_Change)
    ? `${Number(Per_Change).toFixed(2)}%`
    : Per_Change;
  const isPositive = Number(Change) > 0;

  return (
    <CustomCard style={styles.card}>
      <Pressable onPress={handleItemPress}>
        <Text style={styles.symbol}>{name}</Text>
        <View style={styles.bottomSection}>
          <Text style={styles.value}>
            ₹ {formatNumberToIndianStandard(Close)}
          </Text>
          <Text style={styles.changeText}>
            <Text style={isPositive ? styles.green : styles.red}>
              {changeValue}
            </Text>
            <Text style={isPositive ? styles.green : styles.red}>
              {' '}
              ({percentChange})
            </Text>
          </Text>
        </View>
      </Pressable>
    </CustomCard>
  );
});

const IndicesList = ({data, navigation}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <IndicesItem data={item} navigation={navigation} />}
    contentContainerStyle={styles.listContainer}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    padding: responsive.padding(9),
  },
  card: {
    height: responsive.height(70),
    margin: responsive.margin(5),
    padding: responsive.padding(10),
    borderRadius: responsive.borderRadius(8),
    justifyContent: 'center',
  },
  symbol: {
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
    marginVertical: responsive.margin(5),
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: responsive.fontSize(13),
    color: 'black',
    margin: responsive.margin(2),
  },
  changeText: {
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  loaderContainer: {
    marginHorizontal: responsive.margin(100),
    justifyContent: 'center',
    margin: responsive.margin(10),
  },
});

export default IndicesList;
