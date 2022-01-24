import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  businesses: {},
  total: 0,
  region: {},
  error: null,
  isLoading: false,
};

const businesses = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    updateBusinesses(state, action) {
      const {
        payload: { businesses, total, region, isLoading, error },
      } = action;
      state.businesses = businesses;
      state.total = total;
      state.region = region;
      state.isLoading = isLoading;
      state.error = error;
    },
    resetBusinesses(state, action) {
      state.businesses = {};
      state.total = 0;
      state.region = {};
      state.error = null;
      state.isLoading = true;
    },
  },
});

export const { updateBusinesses, resetBusinesses } = businesses.actions;
export default businesses.reducer;
