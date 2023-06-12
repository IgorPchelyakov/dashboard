import { News } from '@/types/news';
import { api } from '../../api';

export const newsOdesaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOdesaNews: builder.query<News[], void>({
      query: () => ({
        url: '/odesa/news',
        method: 'GET',
      }),
    }),
    getOdesaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/odesa/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllOdesaNewsQuery, useGetOdesaNewsByIdQuery } =
  newsOdesaApi;

export const {
  endpoints: { getAllOdesaNews, getOdesaNewsById },
} = newsOdesaApi;
