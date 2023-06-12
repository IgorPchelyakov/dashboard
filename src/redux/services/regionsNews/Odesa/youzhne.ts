import { News } from '@/types/news';
import { api } from '../../api';

export const newsYouzhneApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllYouzhneNews: builder.query<News[], void>({
      query: () => ({
        url: '/youzhne/news',
        method: 'GET',
      }),
    }),
    getYouzhneNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/youzhne/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllYouzhneNewsQuery, useGetYouzhneNewsByIdQuery } =
  newsYouzhneApi;

export const {
  endpoints: { getAllYouzhneNews, getYouzhneNewsById },
} = newsYouzhneApi;
