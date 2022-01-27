import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: 'San Francisco, CA',
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setAddress: (state, action) => ({
      ...state,
      address: action.payload,
    }),
  },
});

export const { setAddress } = mapSlice.actions;

export default mapSlice.reducer;
