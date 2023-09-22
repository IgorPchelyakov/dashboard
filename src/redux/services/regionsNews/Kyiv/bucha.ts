import { News } from '@/types/news';
import { api } from '../../api';

export const newsBuchaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBuchaNews: builder.query<News[], void>({
      query: () => ({
        url: '/bucha/news',
        method: 'GET',
      }),
    }),
    getBuchaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/bucha/news/${id}`,
        method: 'GET',
      }),
    }),
    editBuchaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/bucha/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBuchaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/bucha/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBuchaNewsQuery,
  useGetBuchaNewsByIdQuery,
  useEditBuchaNewsByIdMutation,
  useRemoveBuchaNewsMutation,
} = newsBuchaApi;

export const {
  endpoints: {
    getAllBuchaNews,
    getBuchaNewsById,
    editBuchaNewsById,
    removeBuchaNews,
  },
} = newsBuchaApi;
