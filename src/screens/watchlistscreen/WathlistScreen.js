import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FAB, Text, TextInput} from 'react-native-paper';

import CustomeHeader from '../../components/Header/CustomeHeader';
import Button from '../../components/Button/Button';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';

import responsive from '../../utils/responsive';
import PlusIcon from 'react-native-vector-icons/FontAwesome5';
import {SortIcons} from '../../assets/SVG/appiconsvg/Icons';
import {COLORS} from '../../constants/theme';
import {watchlistNames} from './WatchlistTabs/WatchlistTabs';
import {useDispatch, useSelector} from 'react-redux';
import WatchlistItem from '../../components/List/WatchlistItem';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomModal from '../../components/Modal/CustomModal';
import Icon from 'react-native-vector-icons/Feather';
import {
  deleteSelectedItems,
  deselectAllItem,
  selectAllItem,
} from '../../store/watchlist/watchlistslice';

const WathlistScreen = ({navigation, route}) => {
  const {selectedWatchlistData, watchList1, watchList2, watchList3} =
    useSelector(state => state.mywatchlist);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [searchStock, setSearchStock] = useState();
  const [tabs, setTabs] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    const formattedTabs = [
      {
        id: 'list1',
        watchlist_name: watchlistNames[0],
        data: watchList1?.flat() || [],
        datalength: watchList1[0]?.stock?.length || 0,
      },
      {
        id: 'list2',
        watchlist_name: watchlistNames[1],
        data: watchList2?.flat() || [],
        datalength: watchList2[0]?.stock?.length || 0,
      },
      {
        id: 'list3',
        watchlist_name: watchlistNames[2],
        data: watchList3?.flat() || [],
        datalength: watchList3[0]?.stock?.length || 0,
      },
    ];
    setTabs(formattedTabs);
    setSelectedTab(formattedTabs[0]);
  }, [watchList1, watchList2, watchList3]);

  const flattenedStocks =
    selectedTab?.data?.map(item => item?.stock)?.flat() ?? [];
  // console.log(flattenedStocks);
  // console.log(selectedTab);

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
          <TextInput
            value={searchStock}
            onChangeText={setSearchStock}
            placeholder="Search By name and symbol"
            placeholderTextColor={'#646262a7'}
            mode="outlined"
            style={styles.searchInput}
            outlineStyle={{
              borderRadius: responsive.borderRadius(8),
              borderColor: COLORS.primary,
            }}
            left={<TextInput.Icon icon="magnify" color={COLORS.primary} />}
          />
          <Button style={styles.addStockButton}>
            <View style={styles.addStockContent}>
              <PlusIcon name="plus" color={'white'} size={18} />
              <Text style={styles.addStockText}>Stock</Text>
            </View>
          </Button>
        </View>

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
          <FlatList
            horizontal
            data={tabs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab?.id === item.id ? styles.activeTab : '',
                ]}
                onPress={() => setSelectedTab(item)}>
                <View style={styles.tabContent}>
                  {/* Edit Icon */}
                  <TouchableOpacity
                    onPress={() => {
                      setNewTitle(item?.watchlist_name);
                      setSelectedTab(item);
                      setEditModal(true);
                    }}
                    style={styles.editIcon}>
                    <Icon
                      name="edit-3"
                      size={23}
                      color={
                        selectedTab?.id === item.id ? COLORS.primary : '#888888'
                      }
                    />
                  </TouchableOpacity>
                  <Text
                    style={
                      selectedTab?.id === item.id
                        ? styles.activeTabText
                        : styles.inactiveTabText
                    }>
                    {item?.watchlist_name} ({item?.datalength}/100)
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.tabsContainer}
          />
          <View style={styles.dividerFlatlist} />
          {/* Watchlist items */}
          <FlatList
            data={flattenedStocks}
            keyExtractor={item => item.id || Math.random().toString()}
            renderItem={({item}) => (
              <WatchlistItem item={item} listKey={selectedTab.watchlist_name} />
            )}
            contentContainerStyle={{padding: 5, overflow: 'hidden'}}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 60,
                }}>
                <Text style={{fontWeight: 'bold'}}>No items in this list.</Text>
              </View>
            )}
          />
        </View>

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
          <TouchableOpacity style={styles.modalButton} onPress={updateTabTitle}>
            <Text style={styles.modalButtonText}>Update</Text>
          </TouchableOpacity>
        </CustomModal>
      </View>
      {/* Floating delete button */}'
      {flattenedStocks.length > 0 && (
        <FAB
          style={[styles.fab, {bottom: insets.bottom + 80}]}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsive.margin(10),
    gap: 15,
  },
  searchInput: {
    width: responsive.width(240),
    height: responsive.height(34),
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(20),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'center',
  },
  addStockButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: responsive.padding(10),
    paddingVertical: responsive.padding(9),
    borderRadius: responsive.borderRadius(8),
    justifyContent: 'center',
  },
  addStockContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addStockText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 6,
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
