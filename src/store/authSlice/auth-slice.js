import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {fetchIPInfo} from '../userSlice/user-slice';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';

const initialState = {
  isLoggedIn: false,
  token: null,
  emailId: null,
  firstName: null,
  lastName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      console.log('logedin state');
      const {email, first_name, last_name, token} = action.payload;
      state.isLoggedIn = true;
      state.token = token;
      state.emailId = email;
      state.firstName = first_name;
      state.lastName = last_name;
      console.log('setIsLogin', state.isLoggedIn);
    },
    setIsLogout(state, action) {
      return initialState;
    },
  },
});

// Thunk for login
export const loginAction = ({
  userData,
  setIsLoading,
  //   onSuccess,
  onEmailNotVerify,
}) => {
  return async dispatch => {
    try {
      setIsLoading(true);
      const ipData = await fetchIPInfo();
      console.log(ipData, userData);

      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/user/api/login/`,
        data: {...userData, ...ipData},
        headers: API_HEADERS,
      });
      console.log(response.data);

      if (response.data?.email_verified === true) {
        dispatch(setIsLogin(response.data));
        console.log('Successfully logged in user');
        // onSuccess();
      } else {
        onEmailNotVerify();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
};

export const {setIsLogin, setIsLogout} = authSlice.actions;
export default authSlice.reducer;
