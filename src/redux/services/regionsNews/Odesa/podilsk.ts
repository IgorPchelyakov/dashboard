import { News } from '@/types/news';
import { api } from '../../api';

export const newsPodilskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodilskNews: builder.query<News[], void>({
      query: () => ({
        url: '/podilsk/news',
        method: 'GET',
      }),
    }),
    getPodilskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/podilsk/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPodilskNewsQuery, useGetPodilskNewsByIdQuery } =
  newsPodilskApi;

export const {
  endpoints: { getAllPodilskNews, getPodilskNewsById },
} = newsPodilskApi;
