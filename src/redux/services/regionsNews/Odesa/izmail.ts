import { News } from '@/types/news';
import { api } from '../../api';

export const newsIzmailApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIzmailNews: builder.query<News[], void>({
      query: () => ({
        url: '/izmail/news',
        method: 'GET',
      }),
    }),
    getIzmailNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/izmail/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllIzmailNewsQuery, useGetIzmailNewsByIdQuery } =
  newsIzmailApi;

export const {
  endpoints: { getAllIzmailNews, getIzmailNewsById },
} = newsIzmailApi;
