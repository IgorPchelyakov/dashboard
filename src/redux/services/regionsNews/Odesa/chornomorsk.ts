import { News } from '@/types/news';
import { api } from '../../api';

export const newsChornomorskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllChornomorskNews: builder.query<News[], void>({
      query: () => ({
        url: '/chornomorsk/news',
        method: 'GET',
      }),
    }),
    getChornomorskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/chornomorsk/news/${id}`,
        method: 'GET',
      }),
    }),
    editChornomorskNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/chornomorsk/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeChornomorskNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/chornomorsk/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllChornomorskNewsQuery,
  useGetChornomorskNewsByIdQuery,
  useEditChornomorskNewsByIdMutation,
  useRemoveChornomorskNewsMutation,
} = newsChornomorskApi;

export const {
  endpoints: {
    getAllChornomorskNews,
    getChornomorskNewsById,
    editChornomorskNewsById,
    removeChornomorskNews,
  },
} = newsChornomorskApi;
