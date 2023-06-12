import { api } from './api';
import { News } from '@/types/news';

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => ({
        url: '/news',
        method: 'GET',
      }),
    }),
    getNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'GET',
      }),
    }),
    addNews: builder.mutation<News, News>({
      query: (news) => ({
        url: `/news/add`,
        method: 'POST',
        body: news,
      }),
    }),
    editNews: builder.mutation<string, News>({
      query: (news) => ({
        url: `/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useAddNewsMutation,
  useEditNewsMutation,
  useRemoveNewsMutation,
} = newsApi;

export const {
  endpoints: { getAllNews, getNewsById, addNews, editNews, removeNews },
} = newsApi;
