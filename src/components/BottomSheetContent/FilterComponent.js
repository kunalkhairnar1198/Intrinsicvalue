import {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';

import {useDispatch, useSelector} from 'react-redux';

import FilterIcon from 'react-native-vector-icons/Ionicons';
import UpDownIcon from 'react-native-vector-icons/AntDesign';

import {COLORS} from '../../constants/theme';

import {
  setNseIndicesData,
  setTopGainersData,
  setTopLoosersData,
} from '../../store/dashboard/sortSlice/dashboardslice';

import CustomBottomSheetModal from '../BottomSheet/CustomBottomSheetModal';
import Button from '../Button/Button';

import {useNavigationState} from '@react-navigation/native';
import {TabContext} from '../../context-api/MaterialTopTabContext';

const nseIndicesKey = [
  {label: 'Close', value: 'Close'},
  {label: 'Symbol', value: 'Symbol'},
  {label: 'Volume', value: 'Volume'},
  {label: 'Low', value: 'Low'},
  {label: 'Chagne', value: 'Chagne'},
  {label: 'Per Chnage', value: 'Per_Change'},
  {label: 'Updtime', value: 'Updtime'},
];

const gainersAndLoosersKeys = [
  {label: 'Name', value: 'name'},
  {label: 'Symbol', value: 'symbol'},
  {label: 'NSE_VOLUME', value: 'NSE_VOLUME'},
  {label: 'NSE_AVGPRICE', value: 'NSE_AVGPRICE'},
  {label: 'NSE_PREV_PRICE', value: 'NSE_PREV_PRICE'},
  {label: 'NSE_UPD_TIME', value: 'NSE_UPD_TIME'},
  {label: 'NSE_PER_CHANGE', value: 'NSE_PER_CHANGE'},
];

const FilterComponent = () => {
  const dispatch = useDispatch();
  const {bottomSheetModalRef} = useContext(TabContext);

  const [sortOptions, setSortingOptions] = useState(nseIndicesKey);
  const [selectedValue, setSelectedValue] = useState('Close');
  const [sortOrder, setSortOrder] = useState('asc');

  const {indicesData, topGainersData, topLoosersData} = useSelector(
    state => state.dashboard,
  );
  // console.log(indicesData, topGainersData, topLoosersData);
  // console.log(nseIndicesKey, gainersAndLoosersKeys, sortOptions);

  const currentRoute = useNavigationState(state => {
    const activeRoute = state.routes[state.index];
    return (
      activeRoute?.state?.routes?.[activeRoute.state.index]?.name ||
      'NseIndices'
    );
  });
  // console.log(currentRoute);

  const handleSortOrderChange = order => {
    setSortOrder(order);
  };

  useEffect(() => {
    if (currentRoute === 'NseIndices') {
      setSortingOptions([...nseIndicesKey]);
    } else {
      setSortingOptions([...gainersAndLoosersKeys]);
    }
  }, [currentRoute]);

  const handleUpdateSort = (selectedValue, order, indicesData) => {
    if (currentRoute === 'NseIndices') {
      const filterObject = {
        selectedValue,
        order,
        indicesData,
        filterType: 'indices',
      };
      dispatch(setNseIndicesData(filterObject));
    } else if (currentRoute == 'NseTopGainer') {
      const filterObject = {
        selectedValue,
        order,
        topGainersData,
        filterType: 'NseTopGainer',
      };
      dispatch(setTopGainersData(filterObject));
    } else if (currentRoute == 'NseTopLoser') {
      const filterObject = {
        selectedValue,
        order,
        topLoosersData,
        filterType: 'NseTopLoser',
      };

      dispatch(setTopLoosersData(filterObject));
    }
    console.log(
      'Sorting by:',
      selectedValue,
      'Order:',
      order,
      'nseindicesdata',
      indicesData,
    );

    bottomSheetModalRef.current?.close();
  };

  return (
    <CustomBottomSheetModal
      bottomSheetRef={bottomSheetModalRef}
      snapPoints={['40%', '50%']}>
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

      <View style={styles.sortButtons}>
        <Dropdown
          key={sortOptions.length}
          data={sortOptions}
          labelField="label"
          valueField="value"
          placeholder="Select sorting criteria"
          value={selectedValue}
          onChange={item => setSelectedValue(item.value)}
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
        />
        <View style={styles.sortButtonSection}>
          <Button
            onPress={() => handleSortOrderChange('asc')}
            style={styles.sortButton}>
            <UpDownIcon name="caretup" color={COLORS.primary} size={30} />
          </Button>
          <Button
            onPress={() => handleSortOrderChange('desc')}
            style={styles.sortButton}>
            <UpDownIcon name="caretdown" color={COLORS.primary} size={30} />
          </Button>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <Button
          onPress={() => bottomSheetModalRef.current?.close()}
          style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Button>
        <Button
          onPress={() =>
            handleUpdateSort(selectedValue, sortOrder, indicesData)
          }
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
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    padding: 10,
  },
  sortButtons: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sortButtonSection: {
    flexDirection: 'row',
    gap: 20,
  },
  sortButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
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

export default FilterComponent;
