import React, {useContext, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import {TabContext} from '../../../context-api/MaterialTopTabContext';
import {COLORS} from '../../../constants/theme';

import FilterIcon from 'react-native-vector-icons/Ionicons';

import CustomBottomSheetModal from '../../BottomSheet/CustomBottomSheetModal';
import CustomDropdown from '../../DropDown/CustomDropdown';
import SectionedDropdown from '../../DropDown/SectionedDropdown';

import {PATTERN_GROUP_OPTIONS, SORT_OPTIONS} from './DropdownOptions';

const WatchlistBottomFilter = ({
  sortValue,
  patternSort,
  setPatternSort,
  setSortValue,
  handleSortData,
}) => {
  const {filterBottomSheetModalRef} = useContext(TabContext);

  // const handleUpdate = () => {
  //   console.log('Sort:', sortValue);
  //   console.log('Pattern:', patternSort);

  //   filterBottomSheetModalRef?.current?.close();
  // };

  const handleCancel = () => {
    filterBottomSheetModalRef?.current?.close();
  };

  return (
    <CustomBottomSheetModal
      bottomSheetRef={filterBottomSheetModalRef}
      snapPoints={['45%', '50%']}>
      {/* Title */}
      <View style={styles.titleSection}>
        <FilterIcon
          name="filter"
          color={COLORS.primary}
          size={30}
          style={styles.icon}
        />
        <Text style={styles.text}>Filter By</Text>
      </View>

      <View style={styles.divider} />

      {/* Dropdowns */}
      <View style={styles.dropdownSection}>
        <CustomDropdown
          data={SORT_OPTIONS}
          value={sortValue}
          onChange={item => setSortValue(item.value)}
          placeholder="Select sort option"
        />

        <View style={{marginTop: 15}} />

        <SectionedDropdown
          data={PATTERN_GROUP_OPTIONS}
          value={patternSort}
          onSelect={item => setPatternSort(item)}
          placeholder="Select Pattern"
          modalTitle="Select Pattern Type"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.updateButton} onPress={handleSortData}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
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
    marginHorizontal: 16,
    backgroundColor: '#ABC0FF',
    height: 0.8,
    marginBottom: 10,
  },
  dropdownSection: {
    paddingHorizontal: 20,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.grey,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default WatchlistBottomFilter;
