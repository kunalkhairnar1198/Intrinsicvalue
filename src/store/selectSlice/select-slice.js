import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedItems: [],
  ftsmWatchlist: [],
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const item = action.payload;

      const existsIndex = state.selectedItems.findIndex(
        selected => selected.id === item.id,
      );

      if (existsIndex !== -1) {
        state.selectedItems = state.selectedItems.filter(
          selected => selected.id !== item.id,
        );
      } else {
        state.selectedItems.push(item);
      }
      // console.log('Selected items:', state.selectedItems);
    },
    selectAll: (state, action) => {
      state.selectedItems = action.payload;
      // console.log('select all items', state.selectedItems);
    },
    deselectAll: state => {
      state.selectedItems = [];
      // console.log('deselect items', state.selectedItems);
    },
    addWatchlistItem: (state, action) => {
      if (state.selectedItems) {
        state.ftsmWatchlist.push(state.selectedItems);
        console.log('succesfully add watchlist', state.ftsmWatchlist);
      } else {
        console.log('Failed to load watchlist');
      }
    },
  },
});

export const {toggleItem, selectAll, deselectAll, addWatchlistItem} =
  selectionSlice.actions;
export default selectionSlice.reducer;
