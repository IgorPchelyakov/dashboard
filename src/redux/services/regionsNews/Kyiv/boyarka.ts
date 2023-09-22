import { News } from '@/types/news';
import { api } from '../../api';

export const newsBoyarkaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoyarkaNews: builder.query<News[], void>({
      query: () => ({
        url: '/boyarka/news',
        method: 'GET',
      }),
    }),
    getBoyarkaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/boyarka/news/${id}`,
        method: 'GET',
      }),
    }),
    editBoyarkaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/boyarka/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBoyarkaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/boyarka/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBoyarkaNewsQuery,
  useGetBoyarkaNewsByIdQuery,
  useEditBoyarkaNewsByIdMutation,
  useRemoveBoyarkaNewsMutation,
} = newsBoyarkaApi;

export const {
  endpoints: {
    getAllBoyarkaNews,
    getBoyarkaNewsById,
    editBoyarkaNewsById,
    removeBoyarkaNews,
  },
} = newsBoyarkaApi;
