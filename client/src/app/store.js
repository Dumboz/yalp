import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { businessesApi } from 'services/businesses';

export const store = configureStore({
  reducer: {
    [businessesApi.reducerPath]: businessesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(businessesApi.middleware),
});

setupListeners(store.dispatch);
