import { News } from '@/types/news';
import { api } from '../../api';

export const newsObukhivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllObukhivNews: builder.query<News[], void>({
      query: () => ({
        url: '/obukhiv/news',
        method: 'GET',
      }),
    }),
    getObukhivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/obukhiv/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllObukhivNewsQuery, useGetObukhivNewsByIdQuery } =
  newsObukhivApi;

export const {
  endpoints: { getAllObukhivNews, getObukhivNewsById },
} = newsObukhivApi;
