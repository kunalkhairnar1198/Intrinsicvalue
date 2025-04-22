import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {COLORS} from '../../constants/theme';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';

const DynamicTabScreen = ({route, navigation}) => {
  const {Symbol} = route.params || {};
  const {dynamicData} = useSelector(state => state.dashboard);
  const selectedItems = useSelector(state => state.selection.selectedItems);
  // console.log('DYNAMIC SCREEN, ITEM', dynamicData, Symbol);
  // console.log('dynamic selected', selectedItems);
  return (
    <View style={styles.container}>
      {dynamicData ? (
        <>
          <FlatlistComponent
            data={dynamicData}
            navigation={navigation}
            table={'isTable'}
          />
        </>
      ) : (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DynamicTabScreen;
