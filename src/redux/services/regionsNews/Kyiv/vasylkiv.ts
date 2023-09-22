import { News } from '@/types/news';
import { api } from '../../api';

export const newsVasylkivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVasylkivNews: builder.query<News[], void>({
      query: () => ({
        url: '/vasylkiv/news',
        method: 'GET',
      }),
    }),
    getVasylkivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vasylkiv/news/${id}`,
        method: 'GET',
      }),
    }),
    editVasylkivNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/vasylkiv/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeVasylkivNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/vasylkiv/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllVasylkivNewsQuery,
  useGetVasylkivNewsByIdQuery,
  useEditVasylkivNewsByIdMutation,
  useRemoveVasylkivNewsMutation,
} = newsVasylkivApi;

export const {
  endpoints: {
    getAllVasylkivNews,
    getVasylkivNewsById,
    editVasylkivNewsById,
    removeVasylkivNews,
  },
} = newsVasylkivApi;
