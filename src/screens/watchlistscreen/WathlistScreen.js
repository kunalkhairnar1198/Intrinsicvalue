import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FAB, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  addNewStockInWatchListAction,
  deleteSelectedItems,
  deselectAllItem,
  getWatchListDataAction,
  selectAllItem,
} from '../../store/watchlist/watchlistslice';
import useDebounce from '../../hooks/Debounce/useDebounce';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';

import {COLORS} from '../../constants/theme';

import responsive from '../../utils/responsive';

import {SortIcons} from '../../assets/SVG/appiconsvg/Icons';

import {watchlistNames} from './WatchlistTabs/WatchlistTabs';

import CustomeHeader from '../../components/Header/CustomeHeader';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';
import CustomModal from '../../components/Modal/CustomModal';
import WatchlistItem from '../../components/List/WatchlistItem';
import SearchInput from '../../components/WatchlistComponent/SearchInput';
import SearchList from '../../components/WatchlistComponent/SearchList';
import {
  getUserRankingListAction,
  updateRankingListName,
  updateUserRankingListNameAction,
} from '../../store/userSlice/user-slice';
import WatchlistDynamicTab from '../../components/WatchlistComponent/WatchlistDynamicTab';
import Watchlist from '../../components/WatchlistComponent/WatchList/Watchlist';

const WathlistScreen = ({navigation, route}) => {
  const {
    selectedWatchlistData,
    myWatchListData,
    watchList1,
    watchList2,
    watchList3,
  } = useSelector(state => state.mywatchlist);
  const {token} = useSelector(state => state.auth);

  //RankingList get for tabs
  const {rankingList} = useSelector(state => state.user);
  // console.log('rankinglist', rankingList, myWatchListData);

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [searchStock, setSearchStock] = useState('');
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchData, setSearchData] = useState('');
  const debouncedValue = useDebounce(searchStock, 300);

  const [editModal, setEditModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const [selectedTab, setSelectedTab] = useState({
    id: 1,
    stockcapacity: '51',
    usestock: 6,
    watchlist_name: 'List1',
    watchlist_namestatus: true,
  });
  const [selectedRankingListId, setSelectedRankingListId] = useState(1);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [watchlistData, setWatchListData] = useState([]);

  useEffect(() => {
    dispatch(
      getWatchListDataAction({
        token,
        setIsLoadingData,
        watchlistno: selectedRankingListId,
      }),
    );
    console.log(selectedTab.id, selectedRankingListId);
    dispatch(getUserRankingListAction(token));
  }, []);

  useEffect(() => {
    if (debouncedValue && debouncedValue?.length <= 3) return;

    const getCompaniesData = async query => {
      if (!query) return;
      const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
      try {
        setSearchLoader(true);
        const {data} = await axios({
          method: HTTP_METHODS.POST,
          url: `${API_BASE_URL}/finance/api/companysearch/`,
          headers: localHeader,
          data: {query},
        });
        // console.log('search', data.results);

        if (data?.results?.length === 0) {
          setSearchData([{name: 'No results found', symbol: ''}]);
          return;
        }
        setSearchData(data?.results);
      } catch (error) {
        console.log('error: ', error);
      } finally {
        setSearchLoader(false);
      }
    };
    getCompaniesData(debouncedValue);

    return setSearchData([]);
  }, [debouncedValue, token]);

  // console.log(searchData);

  //when click handleNewStockToWatchlist add item to specific list on search input
  const handleAddNewStockToWatchList = () => {
    // console.log('searchdata', searchData);
    if (!searchStock) return;
    console.log(searchStock);
    dispatch(
      addNewStockInWatchListAction({
        token,
        setIsLoadingData,
        searchStock: searchStock,
        watchlist_number: selectedRankingListId,
        onSuccess: () => resetAllInputs({count: 1, operator: 'add'}),
      }),
    );
    //  setIsNewStockAdded(true);
    // resetAllInputs();
  };

  //if search input item click then populate value on input box
  const handleItemClick = item => {
    console.log(item);
    if (item) {
      setSearchStock(item);
    }
  };
  //reset all inputs whne add button click
  const resetAllInputs = ({count, operator}) => {
    setSearchData('');
    console.log('reset');
    setSearchStock('');

    dispatch(
      getWatchListDataAction({
        token,
        setIsLoadingData,
        watchlistno: selectedRankingListId,
      }),
    );
    dispatch(
      updateRankingListName({
        count,
        operator,
        id: selectedRankingListId,
      }),
    );
  };

  const handleSelectTab = item => {
    setSelectedTab(item);
    setSelectedRankingListId(item.id);
    console.log(item.id);

    dispatch(
      getWatchListDataAction({
        token,
        setIsLoadingData,
        watchlistno: item.id,
      }),
    );
  };
  // console.log('item tab select', selectedRankingListId);

  const handleEditModal = item => {
    console.log('edit', editModal, item.watchlist_name);
    setNewTitle(item?.watchlist_name);
    setEditModal(true);
    setSelectedRankingListId(item.id);
  };

  const handleChangeListName = () => {
    // console.log(selectedRankingListId, newTitle);

    const payload = {
      id: selectedRankingListId,
      name: newTitle,
    };

    console.log(payload);

    dispatch(
      updateUserRankingListNameAction({
        token,
        data: payload,
        setIsLoadingData,
      }),
    );
    resetAllInputs({count: 1, operator: 'add'});
    setEditModal(false);
  };

  const flattenedStocks = myWatchListData?.map(item => item?.watchlist_number);
  // console.log(flattenedStocks);
  // console.log(selectedTab);

  useEffect(() => {
    console.log(myWatchListData);
    setWatchListData(myWatchListData);
  }, [myWatchListData, selectedRankingListId]);

  // console.log(watchlistData);

  // const selectedList ,

  const updateTabTitle = () => {
    setTabs(prev =>
      prev.map(tab =>
        tab.id === selectedTab.id ? {...tab, watchlist_name: newTitle} : tab,
      ),
    );
    setEditModal(false);
  };

  const isAllSelected = selectedWatchlistData.length === flattenedStocks.length;

  useEffect(() => {
    if (selectedTab?.watchlist_name) {
      dispatch(deselectAllItem());
    }
  }, [dispatch, selectedTab]);

  const handleSelectAll = () => {
    // console.log('selection', selectedWatchlistData);
    if (isAllSelected) {
      dispatch(deselectAllItem());
    } else {
      dispatch(selectAllItem(flattenedStocks));
    }
  };
  const handleDeleteWatchlistItem = () => {
    dispatch(deleteSelectedItems(selectedTab.watchlist_name));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomeHeader navigation={navigation} title={route.name} />
      <View style={styles.container}>
        {/* Search input  */}
        <View style={styles.searchContainer}>
          <SearchInput
            value={searchStock}
            onChangeText={setSearchStock}
            showButton={true}
            mode="outlined"
            style={styles.searchInput}
            outlineStyle={{
              borderRadius: responsive.borderRadius(8),
              borderColor: COLORS.primary,
            }}
            placeholder="Search By name and symbol"
            placeholderTextColor={'#646262a7'}
            handleAddNewStockToWatchList={handleAddNewStockToWatchList}
            buttonTitle="Add "
            inputLoader={searchLoader}
            searchData={searchData}
          />
        </View>

        {searchData.length > 0 ? (
          <View>
            <SearchList
              searchData={searchData}
              handleItemClick={handleItemClick}
            />
          </View>
        ) : (
          <View>
            <View style={styles.divider} />

            {/* select all and filter */}
            <View>
              {flattenedStocks.length > 0 && (
                <View style={styles.checkboxContainer}>
                  <CustomCheckBox
                    onPress={handleSelectAll}
                    isChecked={isAllSelected}
                  />

                  <Pressable style={styles.sortBtn}>
                    <SortIcons size={25} color={COLORS.white} />
                  </Pressable>
                </View>
              )}

              {/* Dynamic tabs */}
              <View>
                <WatchlistDynamicTab
                  rankingList={rankingList}
                  handleEditModal={handleEditModal}
                  selectedTab={selectedTab}
                  handleSelectTab={handleSelectTab}
                  selectedRankingListId={selectedRankingListId}
                />
              </View>

              {/* divider */}
              <View style={styles.dividerFlatlist} />

              {/* Watchlist items */}
              <Watchlist
                watchlistData={watchlistData}
                selectedTab={selectedTab}
                selectedRankingListId={selectedRankingListId}
              />
            </View>
          </View>
        )}

        {/* Edit modal */}
        <CustomModal visible={editModal} onClose={() => setEditModal(false)}>
          <Text style={styles.modalText}>Edit Tab Name</Text>
          <TextInput
            style={styles.modalInput}
            value={newTitle}
            onChangeText={setNewTitle}
            mode="outlined"
            outlineStyle={{borderColor: COLORS.primary}}
          />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={handleChangeListName}>
            <Text style={styles.modalButtonText}>Update</Text>
          </TouchableOpacity>
        </CustomModal>
      </View>
      {/* Floating delete button */}'
      {flattenedStocks.length > 0 && (
        <FAB
          style={[styles.fab, {bottom: insets.bottom + 10}]}
          label="Delete"
          mode="elevated"
          color="red"
          rippleColor={'#e89999'}
          animated={true}
          onPress={handleDeleteWatchlistItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    padding: responsive.padding(5),
  },
  divider: {
    top: 10,
    height: 1,
    backgroundColor: '#ABC0FF',
    marginVertical: 12,
    width: '100%',
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
    // alignSelf: 'flex-end',
  },
  tab: {
    paddingVertical: 8,
    padding: 10,
    // paddingHorizontal: 10,
    // marginRight: 10,
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editIcon: {
    // marginRight: 2,
    padding: 0,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  // inactiveTab: {},
  activeTabText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },
  inactiveTabText: {
    color: '#666',
  },
  dividerFlatlist: {
    top: 0,
    height: 2,
    backgroundColor: '#b5b5b5',
    width: '100%',
  },
  tabsContainer: {
    overflow: 'hidden',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: 10,
  },
  fab: {
    position: 'absolute',
    right: 10,
    borderRadius: responsive.borderRadius(10),
    backgroundColor: '#E3EAFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalInput: {
    width: responsive.width(200),
    height: responsive.height(34),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalText: {
    fontWeight: '700',
    fontFamily: 'inter',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WathlistScreen;
