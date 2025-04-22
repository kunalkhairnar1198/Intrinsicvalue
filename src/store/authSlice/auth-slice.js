import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {fetchIPInfo} from '../userSlice/user-slice';
import {API_BASE_URL, API_HEADERS, HTTP_METHODS} from '../../utils/https/https';
import toastService from '../../utils/ToastService/toastService';

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
      // console.log('logedin state');
      const {email, first_name, last_name, token} = action.payload;
      state.isLoggedIn = true;
      state.token = token;
      state.emailId = email;
      state.firstName = first_name;
      state.lastName = last_name;
      // console.log('setIsLogin', state.isLoggedIn);
    },
    setIsLogout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.emailId = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

// Thunk for login
export const loginAction = ({userData, setIsLoading, onEmailNotVerify}) => {
  return async dispatch => {
    try {
      setIsLoading(true);

      const ipData = await fetchIPInfo();
      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/user/api/login/`,
        data: {...userData, ...ipData},
        headers: API_HEADERS,
      });

      if (response.data?.email_verified === true) {
        dispatch(setIsLogin(response.data));
        toastService.showSuccess('Login Successful');
      } else {
        onEmailNotVerify();
      }
    } catch (error) {
      setIsLoading(false);
      toastService.showError(
        error.response?.data?.error,
        'Something went wrong. Try again.',
      );
      // console.log('Login Error:', error.response?.data);
    } finally {
      setIsLoading(false);
    }
  };
};

export const registerAction = ({userData, setIsLoading, onEmailVerify}) => {
  return async dispatch => {
    console.log('register data', userData);
    try {
      setIsLoading(true);

      const ipData = await fetchIPInfo();
      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/user/api/register/`,
        data: {...userData, ...ipData},
        headers: API_HEADERS,
      });

      const user = response?.data;
      // console.log(user);
      if (user?.email_verified == true) {
        toastService.showSuccess('Register user Successful');
      } else {
        toastService.showSuccess('Verification email sent. Please verify.');
        onEmailVerify();
      }
    } catch (error) {
      // console.error('Register Error:', error?.response?.data || error.message);

      const errorMsg =
        error?.response?.data?.error?.email ||
        error?.response?.data?.error ||
        'Something went wrong. Please try again.';

      toastService.showError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
};

export const logoutAction = token => async dispatch => {
  const localHeader = {...API_HEADERS, Authorization: `Token ${token}`};
  console.log(token);
  try {
    const response = await axios({
      method: HTTP_METHODS.GET,
      url: `${API_BASE_URL}/user/api/logout/`,
      headers: localHeader,
    });
    // console.log(response);
    dispatch(setIsLogout());

    toastService.showSuccess(response, 'Logged out successfully');
  } catch (error) {
    dispatch(setIsLogout());
    // console.log(error);
  }
};

export const verifyEmailAction =
  ({data, setIsLoading, onSuccess}) =>
  async dispatch => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/user/api/verifyemailotp/`,
        data: data,
        headers: API_HEADERS,
      });
      // console.log(response);
      toastService.showSuccess(response, 'Email verified successfully');
      dispatch(setIsLogin(response.data));
      onSuccess();
    } catch (error) {
      // console.log({error});
      toastService.showError(error);
    } finally {
      setIsLoading(false);
    }
  };

export const sendOtpAction =
  ({emailId, resetTimer}) =>
  async dispatch => {
    try {
      const response = await axios({
        method: HTTP_METHODS.POST,
        url: `${API_BASE_URL}/user/api/emailverifyotpsend/`,
        headers: API_HEADERS,
        data: {email: emailId},
      });
      // console.log(response);
      toastService.showSuccess(response.data, 'OTP sent successfully');
      resetTimer();
    } catch (error) {
      toastService.showError(error);
    }
  };

export const {setIsLogin, setIsLogout} = authSlice.actions;
export default authSlice.reducer;
