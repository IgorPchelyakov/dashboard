import { News } from '@/types/news';
import { api } from '../../api';

export const newsOdesaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOdesaNews: builder.query<News[], void>({
      query: () => ({
        url: '/odesa/news',
        method: 'GET',
      }),
    }),
    getOdesaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/odesa/news/${id}`,
        method: 'GET',
      }),
    }),
    editOdesaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/odesa/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeOdesaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/odesa/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllOdesaNewsQuery,
  useGetOdesaNewsByIdQuery,
  useEditOdesaNewsByIdMutation,
  useRemoveOdesaNewsMutation,
} = newsOdesaApi;

export const {
  endpoints: {
    getAllOdesaNews,
    getOdesaNewsById,
    editOdesaNewsById,
    removeOdesaNews,
  },
} = newsOdesaApi;
