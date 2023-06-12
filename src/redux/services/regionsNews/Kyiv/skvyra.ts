import { News } from '@/types/news';
import { api } from '../../api';

export const newsSkvyraApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkvyraNews: builder.query<News[], void>({
      query: () => ({
        url: '/skvyra/news',
        method: 'GET',
      }),
    }),
    getSkvyraNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/skvyra/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSkvyraNewsQuery, useGetSkvyraNewsByIdQuery } =
  newsSkvyraApi;

export const {
  endpoints: { getAllSkvyraNews, getSkvyraNewsById },
} = newsSkvyraApi;
