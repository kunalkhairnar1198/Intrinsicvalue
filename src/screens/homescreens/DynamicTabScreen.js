import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {COLORS} from '../../constants/theme';
import {useSelector} from 'react-redux';

const DynamicTabScreen = ({route, navigation}) => {
  const {items} = route.params || {};
  const selectedItems = useSelector(state => state.selection.selectedItems);
  // console.log('DYNAMIC SCREEN, ITEM', items);
  // console.log('dynamic selected', selectedItems);

  return (
    <View style={styles.container}>
      {items ? (
        <>
          <FlatlistComponent
            data={items}
            navigation={navigation}
            table={'isTable'}
          />
        </>
      ) : (
        <Text>No Data Received</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default DynamicTabScreen;
