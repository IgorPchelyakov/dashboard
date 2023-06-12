import { News } from '@/types/news';
import { api } from '../../api';

export const newsKiliyaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllKiliyaNews: builder.query<News[], void>({
      query: () => ({
        url: '/kiliya/news',
        method: 'GET',
      }),
    }),
    getKiliyaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kiliya/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllKiliyaNewsQuery, useGetKiliyaNewsByIdQuery } =
  newsKiliyaApi;

export const {
  endpoints: { getAllKiliyaNews, getKiliyaNewsById },
} = newsKiliyaApi;
