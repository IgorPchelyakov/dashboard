import { News } from '@/types/news';
import { api } from '../../api';

export const newsBoryspilApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoryspilNews: builder.query<News[], void>({
      query: () => ({
        url: '/boryspil/news',
        method: 'GET',
      }),
    }),
    getBoryspilNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/boryspil/news/${id}`,
        method: 'GET',
      }),
    }),
    editBoryspilNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/boryspil/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBoryspilNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/boryspil/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBoryspilNewsQuery,
  useGetBoryspilNewsByIdQuery,
  useEditBoryspilNewsByIdMutation,
  useRemoveBoryspilNewsMutation,
} = newsBoryspilApi;

export const {
  endpoints: {
    getAllBoryspilNews,
    getBoryspilNewsById,
    editBoryspilNewsById,
    removeBoryspilNews,
  },
} = newsBoryspilApi;
