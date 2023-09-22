import { News } from '@/types/news';
import { api } from '../../api';

export const newsYagotynApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllYagotynNews: builder.query<News[], void>({
      query: () => ({
        url: '/yagotyn/news',
        method: 'GET',
      }),
    }),
    getYagotynNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/yagotyn/news/${id}`,
        method: 'GET',
      }),
    }),
    editYagotynNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/yagotyn/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeYagotynNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/yagotyn/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllYagotynNewsQuery,
  useGetYagotynNewsByIdQuery,
  useEditYagotynNewsByIdMutation,
  useRemoveYagotynNewsMutation,
} = newsYagotynApi;

export const {
  endpoints: {
    getAllYagotynNews,
    getYagotynNewsById,
    editYagotynNewsById,
    removeYagotynNews,
  },
} = newsYagotynApi;
