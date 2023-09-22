import { News } from '@/types/news';
import { api } from '../../api';

export const newsPodilskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodilskNews: builder.query<News[], void>({
      query: () => ({
        url: '/podilsk/news',
        method: 'GET',
      }),
    }),
    getPodilskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/podilsk/news/${id}`,
        method: 'GET',
      }),
    }),
    editPodilskNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/podilsk/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePodilskNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/podilsk/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllPodilskNewsQuery,
  useGetPodilskNewsByIdQuery,
  useEditPodilskNewsByIdMutation,
  useRemovePodilskNewsMutation,
} = newsPodilskApi;

export const {
  endpoints: {
    getAllPodilskNews,
    getPodilskNewsById,
    editPodilskNewsById,
    removePodilskNews,
  },
} = newsPodilskApi;
