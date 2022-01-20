import { createSlice } from '@reduxjs/toolkit';
import { getBusinesses } from 'api';

// https://redux-toolkit.js.org/api/createAsyncThunk
// createAsyncThunk(action.type, callback function which return promise)

const initialState = [];

const businesses = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    updateBusinesses(state, action) {
      Object.assign(state, action.payload);
    },
    resetBusinesses(state, action) {
      Object.assign(state, initialState);
    },
    pushBusinesses(state, action) {
      state.push(...action.payload);
    },
  },
});

export const { updateBusinesses, resetBusinesses, pushBusinesses } =
  businesses.actions;
export default businesses.reducer;
