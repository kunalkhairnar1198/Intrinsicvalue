import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

const WatchlistDynamicTab = ({
  rankingList,
  handleEditModal,
  selectedTab,
  handleSelectTab,
  selectedRankingListId,
}) => {
  const tabs = Object.entries(rankingList || {}).map(([key, value]) => {
    const item = value?.[0] || {};
    return {
      id: item.id,
      usestock: item.usestock,
      stockcapacity: item.stockcapacity,
      watchlist_name: item.watchlist_name,
      watchlist_namestatus: item.watchlist_namestatus,
    };
  });

  // console.log(selectedTab);
  const renderItem = ({item}) => {
    const isSelected = selectedTab?.id === item.id;
    return (
      <View>
        <TouchableOpacity
          style={[styles.tab, isSelected && styles.activeTab]}
          onPress={() => handleSelectTab(item)}>
          <View style={styles.tabContent}>
            <TouchableOpacity
              onPress={() => handleEditModal(item)}
              style={styles.editIcon}>
              <Icon
                name="edit-3"
                size={23}
                color={isSelected ? COLORS.primary : '#888'}
              />
            </TouchableOpacity>
            <Text
              style={
                isSelected ? styles.activeTabText : styles.inactiveTabText
              }>
              {item.watchlist_name} ({item.usestock}/{item.stockcapacity})
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={tabs}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    overflow: 'hidden',
  },
  tab: {
    padding: responsive.padding(15),
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editIcon: {
    paddingRight: responsive.padding(6),
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  activeTabText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },
  inactiveTabText: {
    fontSize: 15,
    color: '#666',
  },
});

export default WatchlistDynamicTab;

// <FlatList
//   horizontal
//   data={tabs}
//   keyExtractor={item => item.id}
//   renderItem={({item}) => (
//     <TouchableOpacity
//       style={[
//         styles.tab,
//         selectedTab?.id === item.id ? styles.activeTab : '',
//       ]}
//       onPress={() => setSelectedTab(item)}>
//       <View style={styles.tabContent}>
//         {/* Edit Icon */}
//         <TouchableOpacity
//           onPress={() => {
//             setNewTitle(item?.watchlist_name);
//             setSelectedTab(item);
//             setEditModal(true);
//           }}
//           style={styles.editIcon}>
//           <Icon
//             name="edit-3"
//             size={23}
//             color={selectedTab?.id === item.id ? COLORS.primary : '#888888'}
//           />
//         </TouchableOpacity>
//         <Text
//           style={
//             selectedTab?.id === item.id
//               ? styles.activeTabText
//               : styles.inactiveTabText
//           }>
//           {item?.watchlist_name} ({item?.usestock}/{item?.stockcapacity})
//         </Text>
//       </View>
//     </TouchableOpacity>
//   )}
//   contentContainerStyle={styles.tabsContainer}
// />;
