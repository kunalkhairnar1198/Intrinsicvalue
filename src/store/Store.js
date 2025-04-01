import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import selectionReducer from '../store/selectSlice/select-slice';

const reducer = combineReducers({
  selection: selectionReducer,
});

export const Store = configureStore({
  reducer,
});
