import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ItemComponent from './ItemComponent';
import responsive from '../../utils/responsive';
import NseTopGainerLooserItem from './NseTopGainerLooserItem';

const FlatlistComponent = ({data, navigation, table}) => {
  // console.log(data);
  const renderItem = ({item}) => (
    <>
      {table === 'isTable' ? (
        <NseTopGainerLooserItem item={item} navigation={navigation} />
      ) : (
        <ItemComponent item={item} navigation={navigation} />
      )}
    </>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={({item}) =>
        Math.random().toString() || item?.id?.toString()
      }
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
