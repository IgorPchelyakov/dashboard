import { News } from '@/types/news';
import { api } from '../../api';

export const newsVasylkivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVasylkivNews: builder.query<News[], void>({
      query: () => ({
        url: '/vasylkiv/news',
        method: 'GET',
      }),
    }),
    getVasylkivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vasylkiv/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllVasylkivNewsQuery, useGetVasylkivNewsByIdQuery } =
  newsVasylkivApi;

export const {
  endpoints: { getAllVasylkivNews, getVasylkivNewsById },
} = newsVasylkivApi;
