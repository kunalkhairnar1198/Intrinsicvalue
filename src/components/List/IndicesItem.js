import React, {useContext} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomCard from '../UI/Card';
import {TabContext} from '../../context-api/MaterialTopTabContext';
import responsive from '../../utils/responsive';
import Loader from '../Loader/Loader';

const IndicesItem = ({data, navigation}) => {
  const {handleItemClick, toggleLoader} = useContext(TabContext);
  // console.log(data);
  const handleItemPress = item => {
    // console.log(item);
    handleItemClick(item, navigation);

    setTimeout(() => {
      navigation.navigate('Home', {
        screen: 'Dynamicscreen',
        params: {item},
      });
      toggleLoader();
    }, 100);
  };
  return (
    <CustomCard style={styles.card}>
      <Pressable onPress={() => handleItemPress(data)}>
        <Text style={styles.symbol}>{data.Symbol}</Text>
        <View style={styles.bottomSection}>
          <Text style={styles.value}>₹ {data.Close}</Text>
          <Text
            style={[
              styles.change,
              {color: data.Change >= 0 ? 'green' : 'red'},
            ]}>
            {data.Change >= 0 ? `+${data.Change}%` : `${data.Change}%`}
          </Text>
        </View>
      </Pressable>
    </CustomCard>
  );
};

const IndicesList = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <IndicesItem data={item} navigation={navigation} />
      )}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <View style={styles.loaderContainer}>
          <Loader size="small" />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: responsive.padding(8),
  },
  card: {
    width: responsive.width(145),
    height: responsive.height(60),
    margin: responsive.margin(10),
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
  },
  change: {
    fontSize: responsive.fontSize(13),
    fontWeight: 'bold',
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IndicesList;
