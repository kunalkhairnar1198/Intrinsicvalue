import {createSlice} from '@reduxjs/toolkit';
import {watchlistNames} from '../../screens/watchlistscreen/WatchlistTabs/WatchlistTabs';

const initialState = {
  selectedWatchlistData: [],
  watchList1: [],
  watchList2: [],
  watchList3: [],
};

const watchlistSlice = createSlice({
  name: 'mywatchlist',
  initialState,
  reducers: {
    addWatchlistData: (state, action) => {
      const item = action.payload;
      const listKey = item.watchlist_name;

      const nameToKeyMap = {
        [watchlistNames[0]]: 'watchList1',
        [watchlistNames[1]]: 'watchList2',
        [watchlistNames[2]]: 'watchList3',
      };

      const targetListKey = nameToKeyMap[listKey];
      if (!targetListKey) return;

      const targetList = state[targetListKey];

      const existing = targetList.find(w => w.watchlist_name === listKey);
      if (existing) {
        const newStocks = item.stock.filter(
          stockItem =>
            !existing.stock.some(
              existingItem => existingItem.id === stockItem.id,
            ),
        );
        existing.stock = [...existing.stock, ...newStocks];
        existing.length = existing.stock.length;
      } else {
        targetList.push({
          watchlist_name: listKey,
          stock: item.stock,
          length: item.stock.length,
          id: item.id,
        });
      }
    },
    toggleSelection: (state, action) => {
      console.log('toggleitem', state.selectedWatchlistData);
      const item = action.payload;

      const existsIndex = state.selectedWatchlistData.findIndex(
        selected => selected.id === item.id,
      );

      if (existsIndex !== -1) {
        state.selectedWatchlistData = state.selectedWatchlistData.filter(
          selected => selected.id !== item.id,
        );
      } else {
        state.selectedWatchlistData.push(item);
      }
      console.log('Selected w items:', state.selectedWatchlistData);
    },

    selectAllItem: (state, action) => {
      state.selectedWatchlistData = action.payload;
      // console.log('select all items', state.selectedItems);
    },
    deselectAllItem: state => {
      state.selectedWatchlistData = [];
      // console.log('deselect items', state.selectedItems);
    },

    deleteSelectedItems: (state, action) => {
      const activeWatchlistName = action.payload;

      const nameToKeyMap = {
        [watchlistNames[0]]: 'List 1',
        [watchlistNames[1]]: 'List 2',
        [watchlistNames[2]]: 'List 3',
      };

      const targetListKey = nameToKeyMap[activeWatchlistName];
      if (!targetListKey) return;

      // Get selected items that belong only to the active tab
      const filteredSelection = state.selectedWatchlistData.filter(
        item => item.watchlist_name === activeWatchlistName,
      );

      if (!filteredSelection.length) return;

      // Update the active list only
      state[targetListKey] = state[targetListKey].map(list => {
        if (list.watchlist_name === activeWatchlistName) {
          const updatedStock = list.stock.filter(
            stock => !filteredSelection.some(sel => sel.id === stock.id),
          );
          return {
            ...list,
            stock: updatedStock,
            length: updatedStock.length,
          };
        }
        return list;
      });

      // Remove only deleted items from selection
      state.selectedWatchlistData = state.selectedWatchlistData.filter(
        item => item.watchlist_name !== activeWatchlistName,
      );
    },
  },
});

export const {
  addWatchlistData,
  selectAllItem,
  deselectAllItem,
  toggleSelection,
  deleteSelectedItems,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
