import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {AddWatchlistIcon} from '../../assets/SVG/appiconsvg/Icons';

import {COLORS} from '../../constants/theme';
import {Dropdown} from 'react-native-element-dropdown';
import {TabContext} from '../../context-api/MaterialTopTabContext';

import CustomBottomSheetModal from '../BottomSheet/CustomBottomSheetModal';
import Button from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addWatchlistData} from '../../store/watchlist/watchlistslice';
import {
  Tabs,
  watchlistNames,
} from '../../screens/watchlistscreen/WatchlistTabs/WatchlistTabs';
import {deselectAll} from '../../store/selectSlice/select-slice';

const AddtoWatchListBottom = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const {addWatchlistBottomModalRef} = useContext(TabContext);

  const dispatch = useDispatch();
  const selectedItems = useSelector(state => state.selection.selectedItems);

  const {watchList1, watchList2, watchList3} = useSelector(
    state => state.mywatchlist,
  );
  // console.log(watchList1, watchList2, watchList3);
  const sortOptions = [
    {label: watchlistNames[0], value: watchlistNames[0]},
    {label: watchlistNames[1], value: watchlistNames[1]},
    {label: watchlistNames[2], value: watchlistNames[2]},
  ];
  // console.log(selectedItems);

  const handleAddWatchlistData = () => {
    const uniqueSelectedItems = selectedItems.filter(
      (item, index, self) => index === self.findIndex(t => t.id === item.id),
    );
    // console.log(uniqueSelectedItems);

    const watchlistitem = {
      id: Math.random().toString(),
      stock: selectedItems,
      watchlist_name: selectedValue,
      length: uniqueSelectedItems.length,
    };

    // console.log(watchlistitem);
    dispatch(addWatchlistData(watchlistitem));
    addWatchlistBottomModalRef.current?.close();

    dispatch(deselectAll());
  };

  return (
    <CustomBottomSheetModal
      bottomSheetRef={addWatchlistBottomModalRef}
      snapPoints={['40%', '50%']}>
      <View style={styles.titleSection}>
        <AddWatchlistIcon
          color={COLORS.primary}
          size={24}
          style={styles.icon}
        />
        <Text style={styles.text}>Add To Watchlist</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.sortButtons}>
        <Dropdown
          data={sortOptions}
          labelField="label"
          valueField="value"
          placeholder="Select List criteria"
          value={selectedValue}
          onChange={item => setSelectedValue(item.value)}
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
        />
      </View>

      <View style={styles.actionButtons}>
        <Button
          onPress={() => addWatchlistBottomModalRef.current?.close()}
          style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Button>
        <Button
          onPress={() => handleAddWatchlistData()}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Update</Text>
        </Button>
      </View>
    </CustomBottomSheetModal>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    paddingLeft: 10,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  divider: {
    margin: 15,
    backgroundColor: '#ABC0FF',
    height: 0.8,
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  sortButtons: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 15,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  submitButton: {
    padding: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddtoWatchListBottom;
