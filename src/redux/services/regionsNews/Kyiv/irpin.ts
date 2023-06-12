import { News } from '@/types/news';
import { api } from '../../api';

export const newsIrpinApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIrpinNews: builder.query<News[], void>({
      query: () => ({
        url: '/irpin/news',
        method: 'GET',
      }),
    }),
    getIrpinNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/irpin/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllIrpinNewsQuery, useGetIrpinNewsByIdQuery } =
  newsIrpinApi;

export const {
  endpoints: { getAllIrpinNews, getIrpinNewsById },
} = newsIrpinApi;
