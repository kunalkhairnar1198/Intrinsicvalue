import {createSlice} from '@reduxjs/toolkit';
import {sortList} from '../../../utils/helpers/utils/sorting/sort-helper';

const initialState = {
  indicesData: null,
  topGainersData: null,
  topLoosersData: null,
  dynamicData: [],
  watchlistItem: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setNseIndicesData: (state, action) => {
      const filterObject = action.payload;
      console.log('redux', filterObject);
      const sorted = sortList(
        filterObject.indicesData,
        filterObject.selectedValue,
        filterObject.order || 'asc',
      );
      if (sorted) {
        state.indicesData = sorted;
      } else {
        state.indicesData = action.payload;
      }
    },

    setTopGainersData: (state, action) => {
      const filterObject = action.payload;

      const sorted = sortList(
        filterObject.topGainersData,
        filterObject.selectedValue,
        filterObject.order || 'asc',
      );
      if (sorted) {
        console.log(sorted);
        state.topGainersData = sorted;
      } else {
        state.topGainersData = action.payload;
      }
    },

    setTopLoosersData: (state, action) => {
      const filterObject = action.payload;

      const sorted = sortList(
        filterObject.topLoosersData,
        filterObject.selectedValue,
        filterObject.order || 'asc',
      );
      if (sorted) {
        console.log(sorted);
        state.topLoosersData = sorted;
      } else {
        state.topLoosersData = action.payload;
      }
      //   state.topLoosersData = action.payload;
    },
    setDynamicData: (state, action) => {
      state.dynamicData = action.payload;
    },
    setWathlistItem: (state, action) => {
      state.watchlistItem = action.payload;
    },
  },
});

export const {
  setNseIndicesData,
  setTopGainersData,
  setTopLoosersData,
  setDynamicData,
  setWathlistItem,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
