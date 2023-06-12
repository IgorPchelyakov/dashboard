import { News } from '@/types/news';
import { api } from '../../api';

export const newsBerezanApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBerezanNews: builder.query<News[], void>({
      query: () => ({
        url: '/berezan/news',
        method: 'GET',
      }),
    }),
    getBerezanNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/berezan/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBerezanNewsQuery, useGetBerezanNewsByIdQuery } =
  newsBerezanApi;

export const {
  endpoints: { getAllBerezanNews, getBerezanNewsById },
} = newsBerezanApi;
