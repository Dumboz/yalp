import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  features: {
    hot_and_new: false,
    request_a_quote: false,
    reservation: false,
    waitlist_reservation: false,
    deals: false,
    gender_neutral_restrooms: false,
    open_to_all: false,
    wheelchair_accessible: false,
  },
  distance: {
    800: true,
    1600: false,
    3200: false,
    8000: false,
    15000: false,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      const payloadState = state.price[action.payload];

      return {
        ...state,
        price: {
          ...state.price,
          [action.payload]: !payloadState,
        },
      };
    },
    setFeatures: (state, action) => {
      const payloadState = state.features[action.payload];

      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !payloadState,
        },
      };
    },
    setDistance: (state, action) => {
      const payloadState = state.distance[action.payload];

      const key = Object.entries(state.distance).filter(([_, bool]) => bool);

      return {
        ...state,
        distance: {
          ...state.distance,
          [key[0][0]]: false,
          [action.payload]: true,
        },
      };
    },
  },
});

export const { setPrice, setFeatures, setDistance } = filterSlice.actions;

export default filterSlice.reducer;
