import React, {useContext} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomCard from '../UI/Card';
import {TabContext} from '../../context-api/MaterialTopTabContext';

const IndicesItem = ({data, navigation}) => {
  const {handleItemClick} = useContext(TabContext);

  const handleItemPress = item => {
    // console.log(item);
    handleItemClick(item, navigation);

    setTimeout(() => {
      navigation.navigate('Home', {
        screen: 'Dynamicscreen',
        params: {item},
      });
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
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
  },
  card: {
    width: 171,
    height: 60,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 14,
    color: 'black',
  },
  change: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default IndicesList;
