import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from '../store/authSlice/auth-slice';
import userReducer from '../store/userSlice/user-slice';
import selectionReducer from '../store/selectSlice/select-slice';
import dashboardReducer from './dashboard/dashboardslice';
import watchlistReducer from './watchlist/watchlistslice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  selection: selectionReducer,
  dashboard: dashboardReducer,
  mywatchlist: watchlistReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(Store);
