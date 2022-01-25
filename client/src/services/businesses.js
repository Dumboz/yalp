import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const businessesApi = createApi({
  reducerPath: 'businessesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001' }),
  endpoints: (builder) => ({
    getBusinesses: builder.query({
      query: (filter) => `api/businesses/search/${filter}`,
    }),
  }),
});

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001' }),
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: (id) => `api/businesses/${id}`,
    }),
  }),
});

export const { useGetBusinessesQuery } = businessesApi;
export const { useGetRestaurantQuery } = restaurantApi;
