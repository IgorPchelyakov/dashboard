import { News } from '@/types/news';
import { api } from '../../api';

export const newsSlavutychApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlavutychNews: builder.query<News[], void>({
      query: () => ({
        url: '/slavutych/news',
        method: 'GET',
      }),
    }),
    getSlavutychNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/slavutych/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSlavutychNewsQuery, useGetSlavutychNewsByIdQuery } =
  newsSlavutychApi;

export const {
  endpoints: { getAllSlavutychNews, getSlavutychNewsById },
} = newsSlavutychApi;
