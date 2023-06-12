import { News } from '@/types/news';
import { api } from '../../api';

export const newsBoyarkaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoyarkaNews: builder.query<News[], void>({
      query: () => ({
        url: '/boyarka/news',
        method: 'GET',
      }),
    }),
    getBoyarkaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/boyarka/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBoyarkaNewsQuery, useGetBoyarkaNewsByIdQuery } =
  newsBoyarkaApi;

export const {
  endpoints: { getAllBoyarkaNews, getBoyarkaNewsById },
} = newsBoyarkaApi;
