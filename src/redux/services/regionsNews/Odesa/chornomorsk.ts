import { News } from '@/types/news';
import { api } from '../../api';

export const newsChornomorskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllChornomorskNews: builder.query<News[], void>({
      query: () => ({
        url: '/chornomorsk/news',
        method: 'GET',
      }),
    }),
    getChornomorskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/chornomorsk/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllChornomorskNewsQuery, useGetChornomorskNewsByIdQuery } =
  newsChornomorskApi;

export const {
  endpoints: { getAllChornomorskNews, getChornomorskNewsById },
} = newsChornomorskApi;
