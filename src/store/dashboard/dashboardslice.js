import {createSlice} from '@reduxjs/toolkit';
import {sortList} from '../../utils/helpers/utils/sorting/sort-helper';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';
import axios from 'axios';

const initialState = {
  indicesData: null,
  topGainersData: null,
  topLoosersData: null,
  dynamicData: null,
  watchlistItem: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setNseIndicesData: (state, action) => {
      const filterObject = action.payload;
      // console.log('redux', filterObject);
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
        // console.log(sorted);
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
        // console.log(sorted);
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

export const getIndicesDataAction = (token, setIsLoading) => {
  return async dispatch => {
    setIsLoading(true);
    const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
    // console.log('get Action is dispatch', token);
    try {
      const {data} = await axios({
        method: HTTP_METHODS.GET,
        url: `${API_BASE_URL}/user/api/niftydata/`,
        headers: localHeader,
      });
      // console.log(data);
      dispatch(setNseIndicesData(data.niftydata));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
};

export const getTopGainerAndLooserAction = (token, setIsLoading) => {
  return async dispatch => {
    setIsLoading(true);
    const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
    console.log('get Action topgainer lloser is dispatch', token);
    try {
      const {data} = await axios({
        method: HTTP_METHODS.GET,
        url: `${API_BASE_URL}/finance/api/getlooserandgainer/`,
        headers: localHeader,
      });
      // console.log(data);
      if (data.gainer) {
        dispatch(setTopGainersData(data?.gainer));
        // console.log(data.gainer);
      }

      if (data.looser) {
        dispatch(setTopLoosersData(data?.looser));
        // console.log(data.looser);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
};

export const getCompanyIndicesAction = (token, symbol, setIsLoading) => {
  console.log('render company indices', symbol);
  return async dispatch => {
    setIsLoading(true);
    dispatch(setDynamicData(null));
    const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
    // console.log('get Action DYNAMIC DATA  is dispatch', token, symbol);
    try {
      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/finance/api/getcompanyindices/`,
        headers: localHeader,
        data: {symbol},
      });
      console.log(response?.data);
      dispatch(setDynamicData(response?.data?.results));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
};

export const {
  setNseIndicesData,
  setTopGainersData,
  setTopLoosersData,
  setDynamicData,
  setWathlistItem,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
