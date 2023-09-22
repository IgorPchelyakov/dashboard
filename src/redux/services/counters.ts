import { Counter } from '@/types/counter';
import { api } from './api';

export const countersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    countAllNationalNews: builder.query<Counter, string>({
      query: (date) => ({
        url: `/count/${date}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCountAllNationalNewsQuery } = countersApi;

export const {
  endpoints: { countAllNationalNews },
} = countersApi;
