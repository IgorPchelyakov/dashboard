import { News } from '@/types/news';
import { api } from '../../api';

export const newsVyshhorodApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVyshhorodNews: builder.query<News[], void>({
      query: () => ({
        url: '/vyshhorod/news',
        method: 'GET',
      }),
    }),
    getVyshhorodNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vyshhorod/news/${id}`,
        method: 'GET',
      }),
    }),
    editVyshhorodNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/vyshhorod/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeVyshhorodNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/vyshhorod/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllVyshhorodNewsQuery,
  useGetVyshhorodNewsByIdQuery,
  useEditVyshhorodNewsByIdMutation,
  useRemoveVyshhorodNewsMutation,
} = newsVyshhorodApi;

export const {
  endpoints: {
    getAllVyshhorodNews,
    getVyshhorodNewsById,
    editVyshhorodNewsById,
    removeVyshhorodNews,
  },
} = newsVyshhorodApi;
