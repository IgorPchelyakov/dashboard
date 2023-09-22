import { News } from '@/types/news';
import { api } from '../../api';

export const newsPereyaslavApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPereyaslavNews: builder.query<News[], void>({
      query: () => ({
        url: '/pereyaslav/news',
        method: 'GET',
      }),
    }),
    getPereyaslavNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pereyaslav/news/${id}`,
        method: 'GET',
      }),
    }),
    editPereyaslavNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/pereyaslav/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePereyaslavNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/pereyaslav/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllPereyaslavNewsQuery,
  useGetPereyaslavNewsByIdQuery,
  useEditPereyaslavNewsByIdMutation,
  useRemovePereyaslavNewsMutation,
} = newsPereyaslavApi;

export const {
  endpoints: {
    getAllPereyaslavNews,
    getPereyaslavNewsById,
    editPereyaslavNewsById,
    removePereyaslavNews,
  },
} = newsPereyaslavApi;
