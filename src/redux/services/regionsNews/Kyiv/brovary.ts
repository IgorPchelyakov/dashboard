import { News } from '@/types/news';
import { api } from '../../api';

export const newsBrovaryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrovaryNews: builder.query<News[], void>({
      query: () => ({
        url: '/brovary/news',
        method: 'GET',
      }),
    }),
    getBrovaryNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/brovary/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBrovaryNewsQuery, useGetBrovaryNewsByIdQuery } =
  newsBrovaryApi;

export const {
  endpoints: { getAllBrovaryNews, getBrovaryNewsById },
} = newsBrovaryApi;
