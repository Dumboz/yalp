import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const queryString = require('query-string');

const initialState = { data: {}, offset: 0, total: 0, region: {} };

// https://redux-toolkit.js.org/api/createAsyncThunk
// createAsyncThunk(action.type, callback function which return promise)
export const fetchBusinesses = createAsyncThunk(
  'businesses',
  async (requestData, { distach, getState }) => {
    const { data } = await axios.get('/api' + requestData);
    const { offset } = queryString.parse(
      requestData.substring(requestData.indexOf('?')),
    );
    return { data, offset };
  },
);

const businesses = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    resetBusinesses(state, action) {
      state.data = {};
      state.offset = 0;
      state.total = 0;
      state.region = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBusinesses.pending, (state, action) => {});
    builder.addCase(fetchBusinesses.fulfilled, (state, action) => {
      const {
        payload: { offset, data },
      } = action;
      state.offset = offset;
      state.data[state.offset] = data.businesses;
      state.total = data.total;
      state.region = data.region;
    });
    builder.addCase(fetchBusinesses.rejected, (state, action) => {});
  },
});

export const { resetBusinesses } = businesses.actions;
export default businesses.reducer;
