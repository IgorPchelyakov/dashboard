import { News } from '@/types/news';
import { api } from '../../api';

export const newsFastivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFastivNews: builder.query<News[], void>({
      query: () => ({
        url: '/fastiv/news',
        method: 'GET',
      }),
    }),
    getFastivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/fastiv/news/${id}`,
        method: 'GET',
      }),
    }),
    editFastivNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/fastiv/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeFastivNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/fastiv/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllFastivNewsQuery,
  useGetFastivNewsByIdQuery,
  useEditFastivNewsByIdMutation,
  useRemoveFastivNewsMutation,
} = newsFastivApi;

export const {
  endpoints: {
    getAllFastivNews,
    getFastivNewsById,
    editFastivNewsById,
    removeFastivNews,
  },
} = newsFastivApi;
