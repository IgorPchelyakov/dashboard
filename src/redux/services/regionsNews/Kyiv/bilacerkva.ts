import { News } from '@/types/news';
import { api } from '../../api';

export const newsBilacerkvaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBilacerkvaNews: builder.query<News[], void>({
      query: () => ({
        url: '/bilacerkva/news',
        method: 'GET',
      }),
    }),
    getBilacerkvaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/bilacerkva/news/${id}`,
        method: 'GET',
      }),
    }),
    editBilacerkvaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/bilacerkva/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBilacerkvaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/bilacerkva/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBilacerkvaNewsQuery,
  useGetBilacerkvaNewsByIdQuery,
  useEditBilacerkvaNewsByIdMutation,
  useRemoveBilacerkvaNewsMutation,
} = newsBilacerkvaApi;

export const {
  endpoints: {
    getAllBilacerkvaNews,
    getBilacerkvaNewsById,
    editBilacerkvaNewsById,
    removeBilacerkvaNews,
  },
} = newsBilacerkvaApi;
