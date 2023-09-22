import { News } from '@/types/news';
import { api } from '../../api';

export const newsVyshneveApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVyshneveNews: builder.query<News[], void>({
      query: () => ({
        url: '/vyshneve/news',
        method: 'GET',
      }),
    }),
    getVyshneveNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vyshneve/news/${id}`,
        method: 'GET',
      }),
    }),
    editVyshneveNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/vyshneve/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeVyshneveNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/vyshneve/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllVyshneveNewsQuery,
  useGetVyshneveNewsByIdQuery,
  useEditVyshneveNewsByIdMutation,
  useRemoveVyshneveNewsMutation,
} = newsVyshneveApi;

export const {
  endpoints: {
    getAllVyshneveNews,
    getVyshneveNewsById,
    editVyshneveNewsById,
    removeVyshneveNews,
  },
} = newsVyshneveApi;
