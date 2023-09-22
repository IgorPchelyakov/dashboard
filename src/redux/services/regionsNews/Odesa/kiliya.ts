import { News } from '@/types/news';
import { api } from '../../api';

export const newsKiliyaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllKiliyaNews: builder.query<News[], void>({
      query: () => ({
        url: '/kiliya/news',
        method: 'GET',
      }),
    }),
    getKiliyaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kiliya/news/${id}`,
        method: 'GET',
      }),
    }),
    editKiliyaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/kiliya/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeKiliyaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/kiliya/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllKiliyaNewsQuery,
  useGetKiliyaNewsByIdQuery,
  useEditKiliyaNewsByIdMutation,
  useRemoveKiliyaNewsMutation,
} = newsKiliyaApi;

export const {
  endpoints: {
    getAllKiliyaNews,
    getKiliyaNewsById,
    editKiliyaNewsById,
    removeKiliyaNews,
  },
} = newsKiliyaApi;
