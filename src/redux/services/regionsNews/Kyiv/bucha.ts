import { News } from '@/types/news';
import { api } from '../../api';

export const newsBuchaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBuchaNews: builder.query<News[], void>({
      query: () => ({
        url: '/bucha/news',
        method: 'GET',
      }),
    }),
    getBuchaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/bucha/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBuchaNewsQuery, useGetBuchaNewsByIdQuery } =
  newsBuchaApi;

export const {
  endpoints: { getAllBuchaNews, getBuchaNewsById },
} = newsBuchaApi;
