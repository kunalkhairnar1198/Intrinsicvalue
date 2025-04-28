import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import WatchlistItem from '../WatchlistItem/WatchlistItem';
import Loader from '../../Loader/Loader';
import {COLORS} from '../../../constants/theme';

const Watchlist = ({
  watchlistData,
  selectedTab,
  selectedRankingListId,
  selectedItems,
  setSelectedItems,
}) => {
  const filteredData = watchlistData.filter(
    item => item.watchlist_number === selectedRankingListId,
  );

  return (
    <View>
      <FlatList
        data={filteredData}
        scrollEnabled
        keyExtractor={item => item.id?.toString()}
        renderItem={({item}) => (
          <WatchlistItem
            item={item}
            symbolData={item?.symbol}
            patternData={item?.pattern_data}
            technicalrankdata={item?.technicalrankdata}
            listKey={selectedTab?.watchlist_name}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        )}
        contentContainerStyle={{
          padding: 5,
          paddingBottom: 15,
        }}
        ListEmptyComponent={() =>
          filteredData?.length === 0 ? (
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 60,
              }}>
              <Text style={{fontWeight: 'bold'}}>No items in this list.</Text>
            </View>
          ) : (
            <Loader size="small" color={COLORS.primary} />
          )
        }
      />
    </View>
  );
};

export default Watchlist;
