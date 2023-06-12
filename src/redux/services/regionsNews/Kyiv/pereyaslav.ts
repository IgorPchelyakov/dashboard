import { News } from '@/types/news';
import { api } from '../../api';

export const newsPereyaslavApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPereyaslavNews: builder.query<News[], void>({
      query: () => ({
        url: '/pereyaslav/news',
        method: 'GET',
      }),
    }),
    getPereyaslavNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pereyaslav/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPereyaslavNewsQuery, useGetPereyaslavNewsByIdQuery } =
  newsPereyaslavApi;

export const {
  endpoints: { getAllPereyaslavNews, getPereyaslavNewsById },
} = newsPereyaslavApi;
