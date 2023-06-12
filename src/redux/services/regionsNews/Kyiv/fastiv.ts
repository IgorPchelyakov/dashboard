import { News } from '@/types/news';
import { api } from '../../api';

export const newsFastivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFastivNews: builder.query<News[], void>({
      query: () => ({
        url: '/fastiv/news',
        method: 'GET',
      }),
    }),
    getFastivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/fastiv/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllFastivNewsQuery, useGetFastivNewsByIdQuery } =
  newsFastivApi;

export const {
  endpoints: { getAllFastivNews, getFastivNewsById },
} = newsFastivApi;
