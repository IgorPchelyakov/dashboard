import { News } from '@/types/news';
import { api } from '../../api';

export const newsSkvyraApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkvyraNews: builder.query<News[], void>({
      query: () => ({
        url: '/skvyra/news',
        method: 'GET',
      }),
    }),
    getSkvyraNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/skvyra/news/${id}`,
        method: 'GET',
      }),
    }),
    editSkvyraNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/skvyra/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeSkvyraNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/skvyra/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllSkvyraNewsQuery,
  useGetSkvyraNewsByIdQuery,
  useEditSkvyraNewsByIdMutation,
  useRemoveSkvyraNewsMutation,
} = newsSkvyraApi;

export const {
  endpoints: {
    getAllSkvyraNews,
    getSkvyraNewsById,
    editSkvyraNewsById,
    removeSkvyraNews,
  },
} = newsSkvyraApi;
