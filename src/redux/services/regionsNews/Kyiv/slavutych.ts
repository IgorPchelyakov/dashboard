import { News } from '@/types/news';
import { api } from '../../api';

export const newsSlavutychApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlavutychNews: builder.query<News[], void>({
      query: () => ({
        url: '/slavutych/news',
        method: 'GET',
      }),
    }),
    getSlavutychNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/slavutych/news/${id}`,
        method: 'GET',
      }),
    }),
    editSlavutychNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/slavutych/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeSlavutychNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/slavutych/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllSlavutychNewsQuery,
  useGetSlavutychNewsByIdQuery,
  useEditSlavutychNewsByIdMutation,
  useRemoveSlavutychNewsMutation,
} = newsSlavutychApi;

export const {
  endpoints: {
    getAllSlavutychNews,
    getSlavutychNewsById,
    editSlavutychNewsById,
    removeSlavutychNews,
  },
} = newsSlavutychApi;
