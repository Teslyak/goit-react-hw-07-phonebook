import { createSlice } from '@reduxjs/toolkit';

const initFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initFilter,
  reducers: {
    getFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});
export const { getFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
