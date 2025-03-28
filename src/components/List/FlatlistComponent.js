import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ItemComponent from './ItemComponent';
import responsive from '../../utils/responsive';

const FlatlistComponent = ({data, navigation}) => {
  console.log(data);
  const renderItem = ({item}) => (
    <ItemComponent item={item} navigation={navigation} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: responsive.padding(5),
    margin: responsive.margin(5),
  },
});

export default FlatlistComponent;
