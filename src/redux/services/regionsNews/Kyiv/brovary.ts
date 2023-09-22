import { News } from '@/types/news';
import { api } from '../../api';

export const newsBrovaryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrovaryNews: builder.query<News[], void>({
      query: () => ({
        url: '/brovary/news',
        method: 'GET',
      }),
    }),
    getBrovaryNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/brovary/news/${id}`,
        method: 'GET',
      }),
    }),
    editBrovaryNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/brovary/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBrovaryNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/brovary/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBrovaryNewsQuery,
  useGetBrovaryNewsByIdQuery,
  useEditBrovaryNewsByIdMutation,
  useRemoveBrovaryNewsMutation,
} = newsBrovaryApi;

export const {
  endpoints: {
    getAllBrovaryNews,
    getBrovaryNewsById,
    editBrovaryNewsById,
    removeBrovaryNews,
  },
} = newsBrovaryApi;
