import { News } from '@/types/news';
import { api } from '../../api';

export const newsYouzhneApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllYouzhneNews: builder.query<News[], void>({
      query: () => ({
        url: '/youzhne/news',
        method: 'GET',
      }),
    }),
    getYouzhneNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/youzhne/news/${id}`,
        method: 'GET',
      }),
    }),
    editYouzhneNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/youzhne/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeYouzhneNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/youzhne/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllYouzhneNewsQuery,
  useGetYouzhneNewsByIdQuery,
  useEditYouzhneNewsByIdMutation,
  useRemoveYouzhneNewsMutation,
} = newsYouzhneApi;

export const {
  endpoints: {
    getAllYouzhneNews,
    getYouzhneNewsById,
    editYouzhneNewsById,
    removeYouzhneNews,
  },
} = newsYouzhneApi;
