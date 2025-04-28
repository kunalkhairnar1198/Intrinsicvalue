import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';
import {watchlistNames} from '../../screens/watchlistscreen/WatchlistTabs/WatchlistTabs';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';
import toastService from '../../utils/ToastService/toastService';

const initialState = {
  selectedWatchlistData: [],
  watchList1: [],
  watchList2: [],
  watchList3: [],
  myWatchListData: [],
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
      // console.log('toggleitem', state.selectedWatchlistData);
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
      // console.log('Selected w items:', state.selectedWatchlistData);
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

    setWatchListData: (state, action) => {
      state.myWatchListData = action.payload;
    },
  },
});

export const getWatchListDataAction =
  ({token, setIsLoadingData, watchlistno, filterBy = 'all', otherParams}) =>
  async dispatch => {
    console.log(watchlistno);
    try {
      setIsLoadingData(true);
      const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
      const {data} = await axios({
        method: HTTP_METHODS.GET,
        url: `${API_BASE_URL}/finance/api/v2/getwatchlist/`,
        params: {
          watchlistno,
          filterby: filterBy,
          ...otherParams,
        },
        headers: localHeader,
      });
      // console.log('data', data.results);
      dispatch(setWatchListData(data?.results));
      toastService.showSuccess('succesfully data loaded');
    } catch (error) {
      toastService.showError(
        'Upgrade your account to unlock additional FTSM Watchlist Lists and access more stocks in your Watchlist.',
      );
    } finally {
      setIsLoadingData(false);
    }
  };

export const addNewStockInWatchListAction =
  ({searchStock, watchlist_number, setIsLoadingData, token, onSuccess}) =>
  async dispatch => {
    console.log('searchstok add', searchStock, watchlist_number);
    try {
      setIsLoadingData(true);
      const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
      const {data} = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/finance/api/insertwatchlist/`,
        headers: localHeader,
        data: {symbol: searchStock, watchlist_number},
      });
      toastService.showSuccess(
        data,
        data.results || 'Stock added to FTSM Watchlist',
      );
      onSuccess();
    } catch (error) {
      toastService.showError('Already exist');
    } finally {
      setIsLoadingData(false);
    }
  };
export const deleteStockFromWatchListAction =
  ({token, ids, onSuccess, watchlistno}) =>
  async dispatch => {
    console.log('token delete', ids, watchlistno);
    try {
      const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
      const response = await axios({
        method: HTTP_METHODS.DELETE,
        url: `${API_BASE_URL}/finance/api/multipledeletewatchlist/`,
        headers: localHeader,
        data: {ids, watchlistno},
      });
      // console.log('res', response);
      toastService.showSuccess(
        response.data.results,
        'Stock deleted from FTSM Watchlist',
      );
      onSuccess();
    } catch (error) {
      toastService.showError('error get', error);
    }
  };

export const {
  setWatchListData,
  addWatchlistData,
  selectAllItem,
  deselectAllItem,
  toggleSelection,
  deleteSelectedItems,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
