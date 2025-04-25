import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import WatchlistItem from '../WatchlistItem/WatchlistItem';

const Watchlist = ({watchlistData, selectedTab, selectedRankingListId}) => {
  const filteredData = watchlistData.filter(
    item => item.watchlist_number === selectedRankingListId,
  );
  console.log('---------', filteredData, selectedTab, selectedRankingListId);

  return (
    <View>
      <FlatList
        data={filteredData}
        scrollEnabled={true}
        keyExtractor={item => item.id || Math.random().toString()}
        renderItem={({item}) => (
          <WatchlistItem
            item={item}
            symbolData={item?.symbol}
            patternData={item?.pattern_data}
            technicalrankdata={item?.technicalrankdata}
            listKey={selectedTab?.watchlist_name}
          />
        )}
        contentContainerStyle={{
          padding: 5,
          overflow: 'hidden',
          paddingBottom: 15,
        }}
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
  );
};

export default Watchlist;
