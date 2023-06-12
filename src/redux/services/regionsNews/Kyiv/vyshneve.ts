import { News } from '@/types/news';
import { api } from '../../api';

export const newsVyshneveApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVyshneveNews: builder.query<News[], void>({
      query: () => ({
        url: '/vyshneve/news',
        method: 'GET',
      }),
    }),
    getVyshneveNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vyshneve/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllVyshneveNewsQuery, useGetVyshneveNewsByIdQuery } =
  newsVyshneveApi;

export const {
  endpoints: { getAllVyshneveNews, getVyshneveNewsById },
} = newsVyshneveApi;
