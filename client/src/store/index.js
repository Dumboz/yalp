import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { businessesApi, restaurantApi } from 'services/businesses';
import mapReducer from './mapSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    filter: filterReducer,
    [businessesApi.reducerPath]: businessesApi.reducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(businessesApi.middleware)
      .concat(restaurantApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export const StoreProvider = props => {
  return <Provider store={store} {...props} />;
};
