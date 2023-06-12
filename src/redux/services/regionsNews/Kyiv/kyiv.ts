import { News } from '@/types/news';
import { api } from '../../api';

export const newsKyivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllKyivNews: builder.query<News[], void>({
      query: () => ({
        url: '/kyiv/news',
        method: 'GET',
      }),
    }),
    getKyivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kyiv/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllKyivNewsQuery, useGetKyivNewsByIdQuery } = newsKyivApi;

export const {
  endpoints: { getAllKyivNews, getKyivNewsById },
} = newsKyivApi;
