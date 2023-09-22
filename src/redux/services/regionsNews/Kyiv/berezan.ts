import { News } from '@/types/news';
import { api } from '../../api';

export const newsBerezanApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBerezanNews: builder.query<News[], void>({
      query: () => ({
        url: '/berezan/news',
        method: 'GET',
      }),
    }),
    getBerezanNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/berezan/news/${id}`,
        method: 'GET',
      }),
    }),
    editBerezanNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/berezan/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBerezanNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/berezan/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBerezanNewsQuery,
  useGetBerezanNewsByIdQuery,
  useEditBerezanNewsByIdMutation,
  useRemoveBerezanNewsMutation,
} = newsBerezanApi;

export const {
  endpoints: {
    getAllBerezanNews,
    getBerezanNewsById,
    editBerezanNewsById,
    removeBerezanNews,
  },
} = newsBerezanApi;
