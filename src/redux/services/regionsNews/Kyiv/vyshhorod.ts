import { News } from '@/types/news';
import { api } from '../../api';

export const newsVyshhorodApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVyshhorodNews: builder.query<News[], void>({
      query: () => ({
        url: '/vyshhorod/news',
        method: 'GET',
      }),
    }),
    getVyshhorodNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vyshhorod/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllVyshhorodNewsQuery, useGetVyshhorodNewsByIdQuery } =
  newsVyshhorodApi;

export const {
  endpoints: { getAllVyshhorodNews, getVyshhorodNewsById },
} = newsVyshhorodApi;
