import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import selectionReducer from '../store/selectSlice/select-slice';
import dashboardReducer from './dashboard/dashboardslice';
import watchlistReducer from './watchlist/watchlistslice';
const reducer = combineReducers({
  selection: selectionReducer,
  // sort: sortReducer,
  dashboard: dashboardReducer,
  mywatchlist: watchlistReducer,
});

export const Store = configureStore({
  reducer,
});
