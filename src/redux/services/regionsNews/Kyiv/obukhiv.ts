import { News } from '@/types/news';
import { api } from '../../api';

export const newsObukhivApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllObukhivNews: builder.query<News[], void>({
      query: () => ({
        url: '/obukhiv/news',
        method: 'GET',
      }),
    }),
    getObukhivNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/obukhiv/news/${id}`,
        method: 'GET',
      }),
    }),
    editObukhivNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/obukhiv/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeObukhivNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/obukhiv/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllObukhivNewsQuery,
  useGetObukhivNewsByIdQuery,
  useEditObukhivNewsByIdMutation,
  useRemoveObukhivNewsMutation,
} = newsObukhivApi;

export const {
  endpoints: {
    getAllObukhivNews,
    getObukhivNewsById,
    editObukhivNewsById,
    removeObukhivNews,
  },
} = newsObukhivApi;
