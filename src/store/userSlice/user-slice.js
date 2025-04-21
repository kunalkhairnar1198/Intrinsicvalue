import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {},
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

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;
