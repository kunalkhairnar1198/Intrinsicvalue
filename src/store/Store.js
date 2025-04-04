import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import selectionReducer from '../store/selectSlice/select-slice';
import sortReducer from './dashboard/sortSlice/sortSlice';
import dashboardReducer from './dashboard/sortSlice/dashboardslice';
const reducer = combineReducers({
  selection: selectionReducer,
  sort: sortReducer,
  dashboard: dashboardReducer,
});

export const Store = configureStore({
  reducer,
});
