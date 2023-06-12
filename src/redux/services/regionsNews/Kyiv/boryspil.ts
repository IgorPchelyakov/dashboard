import { News } from '@/types/news';
import { api } from '../../api';

export const newsBoryspilApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoryspilNews: builder.query<News[], void>({
      query: () => ({
        url: '/boryspil/news',
        method: 'GET',
      }),
    }),
    getBoryspilNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/boryspil/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBoryspilNewsQuery, useGetBoryspilNewsByIdQuery } =
  newsBoryspilApi;

export const {
  endpoints: { getAllBoryspilNews, getBoryspilNewsById },
} = newsBoryspilApi;
