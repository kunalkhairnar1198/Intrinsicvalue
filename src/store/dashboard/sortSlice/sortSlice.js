import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sortedItems: [],
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortedData: (state, action) => {},
    sortData: (state, action) => {},
  },
});

export const {setSortedData, sortData} = sortSlice.actions;
export default sortSlice.reducer;
