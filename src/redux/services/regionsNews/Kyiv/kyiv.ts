import { News } from '@/types/news';
import { api } from '../../api';

export const newsKyivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllKyivNews: builder.query<News[], void>({
      query: () => ({
        url: '/kyiv/news',
        method: 'GET',
      }),
    }),
    getKyivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kyiv/news/${id}`,
        method: 'GET',
      }),
    }),
    editKyivNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/kyiv/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeKyivNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/kyiv/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllKyivNewsQuery,
  useGetKyivNewsByIdQuery,
  useEditKyivNewsByIdMutation,
  useRemoveKyivNewsMutation,
} = newsKyivApi;

export const {
  endpoints: {
    getAllKyivNews,
    getKyivNewsById,
    editKyivNewsById,
    removeKyivNews,
  },
} = newsKyivApi;
