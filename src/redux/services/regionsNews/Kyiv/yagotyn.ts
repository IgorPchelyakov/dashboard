import { News } from '@/types/news';
import { api } from '../../api';

export const newsYagotynApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllYagotynNews: builder.query<News[], void>({
      query: () => ({
        url: '/yagotyn/news',
        method: 'GET',
      }),
    }),
    getYagotynNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/yagotyn/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllYagotynNewsQuery, useGetYagotynNewsByIdQuery } =
  newsYagotynApi;

export const {
  endpoints: { getAllYagotynNews, getYagotynNewsById },
} = newsYagotynApi;
