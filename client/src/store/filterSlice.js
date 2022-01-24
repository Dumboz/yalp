import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: '',
  features: '',
  distance: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice: (state, action) => ({
      ...state,
      price: action.payload,
    }),
    setFeatures: (state, action) => ({
      ...state,
      features: action.payload,
    }),
    setDistance: (state, action) => ({
      ...state,
      distance: action.payload,
    }),
  },
});

export const { setPrice, setFeatures, setDistance } = filterSlice.actions;

export default filterSlice.reducer;
