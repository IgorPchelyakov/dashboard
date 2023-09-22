import { News } from '@/types/news';
import { api } from '../../api';

export const newsIzmailApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIzmailNews: builder.query<News[], void>({
      query: () => ({
        url: '/izmail/news',
        method: 'GET',
      }),
    }),
    getIzmailNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/izmail/news/${id}`,
        method: 'GET',
      }),
    }),
    editIzmailNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/izmail/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeIzmailNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/izmail/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllIzmailNewsQuery,
  useGetIzmailNewsByIdQuery,
  useEditIzmailNewsByIdMutation,
  useRemoveIzmailNewsMutation,
} = newsIzmailApi;

export const {
  endpoints: {
    getAllIzmailNews,
    getIzmailNewsById,
    editIzmailNewsById,
    removeIzmailNews,
  },
} = newsIzmailApi;
