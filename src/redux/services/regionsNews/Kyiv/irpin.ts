import { News } from '@/types/news';
import { api } from '../../api';

export const newsIrpinApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIrpinNews: builder.query<News[], void>({
      query: () => ({
        url: '/irpin/news',
        method: 'GET',
      }),
    }),
    getIrpinNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/irpin/news/${id}`,
        method: 'GET',
      }),
    }),
    editIrpinNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/irpin/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeIrpinNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/irpin/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllIrpinNewsQuery,
  useGetIrpinNewsByIdQuery,
  useEditIrpinNewsByIdMutation,
  useRemoveIrpinNewsMutation,
} = newsIrpinApi;

export const {
  endpoints: {
    getAllIrpinNews,
    getIrpinNewsById,
    editIrpinNewsById,
    removeIrpinNews,
  },
} = newsIrpinApi;
