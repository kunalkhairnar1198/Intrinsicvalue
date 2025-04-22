import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, FAB, Portal, Text} from 'react-native-paper';

import {useContext, useEffect, useState} from 'react';
import {TabContext} from '../../context-api/MaterialTopTabContext';

import {
  AddWatchlistIcon,
  SingleLineIcon,
  SortIcons,
} from '../../assets/SVG/appiconsvg/Icons';
import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

import CustomeHeader from '../../components/Header/CustomeHeader';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';
import MaterialToptabnavigation from '../../navigations/TopTabBarNavigation/MaterialToptabnavigation';

// import NseIndicesData from '../../assets/NiftyData/Data.json';
// import NseTopGainerLooser from '../../assets/NiftyData/NseTopGainerLooser.json';
// import companyIndices from '../../assets/NiftyData/CompanyIndices.json';

import IndicesList from '../../components/List/IndicesItem';

import {useDispatch, useSelector} from 'react-redux';
import {
  addWatchlistItem,
  deselectAll,
  selectAll,
} from '../../store/selectSlice/select-slice';
import {getFormattedTime} from '../../utils/helpers/utils/time-date/timeDateFormater';

import FilterComponent from '../../components/BottomSheetContent/FilterComponent';

import WatchlistBottomComponent from '../../components/BottomSheetContent/WatchlistBottomComponent';
import AddtoWatchListBottom from '../../components/BottomSheetContent/AddtoWatchListBottom';

const HomeScreen = ({navigation, route}) => {
  // const {niftydata} = NseIndicesData;
  const {indicesData, topGainersData, topLoosersData, dynamicData} =
    useSelector(state => state.dashboard);
  // console.log(indicesData);
  // const {results} = companyIndices;
  // const {gainer, looser} = NseTopGainerLooser;

  const {loading, bottomSheetModalRef, addWatchlistBottomModalRef} =
    useContext(TabContext);

  const [activeTab, setActiveTab] = useState('NseTopGainer');
  const dispatch = useDispatch();

  const selectedItems = useSelector(state => state.selection.selectedItems);

  // const ftsmWatchlistItems = useSelector(state => state.mywatchlist.watchList1);
  // // console.log(ftsmWatchlistItems);

  const getCurrentList = () => {
    switch (activeTab) {
      case 'NseTopGainer':
        return topGainersData;
      case 'NseTopLoser':
        return topLoosersData;
      case 'NiftyData':
        return indicesData;
      case 'Dynamicscreen':
        return dynamicData;
      default:
        return [];
    }
  };

  const currentList = getCurrentList();

  const isAllSelected = selectedItems.length === currentList?.length;

  useEffect(() => {
    dispatch(deselectAll());
  }, [activeTab, dispatch]);

  const recentTimeDate = getFormattedTime();

  const handleSelectAll = () => {
    console.log('selection', selectedItems);
    if (isAllSelected) {
      dispatch(deselectAll());
    } else {
      dispatch(selectAll(currentList));
    }
  };
  const filteredData = indicesData?.filter(item =>
    ['NIFTY BANK', 'NIFTY NEXT 50', 'NIFTY 50'].includes(item?.indices_name),
  );

  const handleAddWatchlist = () => {
    // console.log(selectedItems);

    addWatchlistBottomModalRef.current?.present();
    // dispatch(addWatchlistData(selectedItems));
    // dispatch(addWatchlistItem());
    // dispatch(deselectAll());
  };

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomeHeader navigation={navigation} title={route.name} />
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <IndicesList data={filteredData} navigation={navigation} />
        </View>

        <View style={{alignItems: 'center'}}>
          <SingleLineIcon size={300} />
        </View>

        <View style={styles.checkboxContainer}>
          {activeTab !== 'NseIndices' && (
            <CustomCheckBox
              onPress={handleSelectAll}
              isChecked={isAllSelected}
            />
          )}
          <Text style={{flex: 1, textAlign: 'center'}}>
            Updated: {recentTimeDate}
          </Text>

          <Pressable onPress={handlePresentModalPress} style={styles.sortBtn}>
            <SortIcons size={25} color={COLORS.white} />
          </Pressable>
        </View>

        <MaterialToptabnavigation setActiveTab={setActiveTab} />
      </View>
      {/* floating button  */}
      <View>
        <FAB
          icon={() => <AddWatchlistIcon size={30} />}
          style={styles.fab}
          visible={activeTab !== 'NseIndices'}
          label="Add to Watchlist"
          mode="elevated"
          onPress={handleAddWatchlist}
        />
      </View>

      {/* bottomsheet modals */}
      <FilterComponent />
      <WatchlistBottomComponent />
      <AddtoWatchListBottom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsive.padding(10),
    margin: responsive.margin(4),
  },
  sortBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsive.padding(5),
    borderRadius: responsive.borderRadius(5),
    width: responsive.width(30),
    height: responsive.height(30),
    backgroundColor: COLORS.primary,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: responsive.borderRadius(10),
    backgroundColor: '#E3EAFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive.width(120),
    height: responsive.padding(50),
    paddingHorizontal: responsive.padding(10),
  },
});

export default HomeScreen;
