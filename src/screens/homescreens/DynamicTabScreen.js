import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {COLORS} from '../../constants/theme';
import Loader from '../../components/Loader/Loader';
import FlatlistComponent from '../../components/List/FlatlistComponent';

const DynamicTabScreen = ({route, navigation}) => {
  const {dynamicData} = route.params || {};
  console.log(dynamicData);
  // const {dynamicData} = useSelector(state => state.dashboard);
  const selectedItems = useSelector(state => state.selection.selectedItems);
  // console.log('DYNAMIC SCREEN, ITEM', dynamicData, Symbol);
  // console.log('dynamic selected', selectedItems);
  return (
    <View style={styles.container}>
      {dynamicData === null || dynamicData === undefined ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : dynamicData.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Data Not Found</Text>
        </View>
      ) : (
        <FlatlistComponent
          data={dynamicData}
          navigation={navigation}
          table={'isTable'}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DynamicTabScreen;
