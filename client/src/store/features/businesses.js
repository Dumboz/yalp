import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { data: {}, index: 1 };

// https://redux-toolkit.js.org/api/createAsyncThunk
// createAsyncThunk(action.type, callback function which return promise)
export const fetchBusinesses = createAsyncThunk(
  'businesses',
  async (requestData, { distach, getState }) => {
    const { data } = await axios.get('/api' + requestData);
    return data;
  },
);

// export const pushBusinesses = createAsyncThunk(
//   'businesses',
//   async (requestData, { distach, getState }) => {
//     const { data } = await axios.get('/api' + requestData);
//     return data;
//   },
// );

const businesses = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    resetBusinesses(state, action) {
      state.data = {};
      state.index = 1;
    },
    // pushBusinesses(state, action) {
    //   state.push(...action.payload);
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchBusinesses.pending, (state, action) => {});
    builder.addCase(fetchBusinesses.fulfilled, (state, action) => {
      state.data[state.index++] = action.payload.businesses;
    });
    builder.addCase(fetchBusinesses.rejected, (state, action) => {});
  },
});

export const { resetBusinesses } = businesses.actions;
export default businesses.reducer;
