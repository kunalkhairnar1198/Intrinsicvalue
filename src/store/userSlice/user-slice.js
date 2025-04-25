import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';
import toastService from '../../utils/ToastService/toastService';

const initialState = {
  rankingList: [],
  rankingListOptions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {},
    setRankingList: (state, action) => {
      state.rankingList = action.payload;
    },
    updateRankingListName: (state, action) => {
      const {id, operator, count, name} = action.payload;
      console.log(action.payload);

      state.rankingList = Object.entries(state.rankingList).reduce(
        (acc, [key, value]) => {
          const {id: watchlistId} = value[0];
          if (watchlistId === id) {
            const updatedItem = {
              ...value[0],
              usestock: count
                ? operator === 'add'
                  ? value[0].usestock + count
                  : value[0].usestock - count
                : value[0].usestock,
              watchlist_name: name ?? value[0].watchlist_name,
            };
            acc[key] = [updatedItem];
          } else {
            acc[key] = value;
          }
          return acc;
        },
        {},
      );
    },
  },
});

export const fetchIPInfo = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/?token=c7271d03bf8cae');
    // setIpData(response.data);
    const data = response.data;
    if (data) {
      // console.log('SUCESFULLY RESPOND DATA', data);
      return {
        ip_address: data.ip,
        ip_country: data.country,
        ip_city: data.city,
        loc: data.loc,
        ip_region: data.region,
      };
    } else {
      console.log('not geting ipdata');
    }
  } catch (error) {
    console.error('Error fetching IP info:', error);
  } finally {
    // setLoading(false);
  }
};

export const getUserRankingListAction = token => async dispatch => {
  try {
    const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
    const {data} = await axios({
      method: HTTP_METHODS.POST,
      url: `${API_BASE_URL}/finance/api/watchlistnameview/`,
      headers: localHeader,
    });
    dispatch(setRankingList(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
export const updateUserRankingListNameAction =
  ({token, data, setIsLoadingData}) =>
  async dispatch => {
    console.log(token, data);
    try {
      setIsLoadingData(true);
      const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
      await axios({
        method: HTTP_METHODS.PUT,
        url: `${API_BASE_URL}/finance/api/watchlistnameview/`,
        headers: localHeader,
        data,
      });
      console.log(data);
      toastService.showSuccess('update list name', data);
      dispatch(updateRankingListName(data));
      // onSuccess();
    } catch (error) {
      console.log('------', error);
      // toastService.showTomato(error);
    } finally {
      setIsLoadingData(false);
    }
  };

export const {setUserData, setRankingList, updateRankingListName} =
  userSlice.actions;
export default userSlice.reducer;
