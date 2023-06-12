import { News } from '@/types/news';
import { api } from '../../api';

export const newsBilacerkvaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBilacerkvaNews: builder.query<News[], void>({
      query: () => ({
        url: '/bilacerkva/news',
        method: 'GET',
      }),
    }),
    getBilacerkvaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/bilacerkva/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBilacerkvaNewsQuery, useGetBilacerkvaNewsByIdQuery } =
  newsBilacerkvaApi;

export const {
  endpoints: { getAllBilacerkvaNews, getBilacerkvaNewsById },
} = newsBilacerkvaApi;
