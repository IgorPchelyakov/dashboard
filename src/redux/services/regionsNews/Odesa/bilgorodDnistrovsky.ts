import { News } from '@/types/news';
import { api } from '../../api';

export const newsBilgorodDnistrovskyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBilgorodDnistrovskyNews: builder.query<News[], void>({
      query: () => ({
        url: '/bilgorod-dnistrovsky/news',
        method: 'GET',
      }),
    }),
    getBilgorodDnistrovskyNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/bilgorod-dnistrovsky/news/${id}`,
        method: 'GET',
      }),
    }),
    editBilgorodDnistrovskyNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/bilgorod-dnistrovsky/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeBilgorodDnistrovskyNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/bilgorod-dnistrovsky/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBilgorodDnistrovskyNewsQuery,
  useGetBilgorodDnistrovskyNewsByIdQuery,
  useEditBilgorodDnistrovskyNewsByIdMutation,
  useRemoveBilgorodDnistrovskyNewsMutation,
} = newsBilgorodDnistrovskyApi;

export const {
  endpoints: {
    getAllBilgorodDnistrovskyNews,
    getBilgorodDnistrovskyNewsById,
    editBilgorodDnistrovskyNewsById,
    removeBilgorodDnistrovskyNews,
  },
} = newsBilgorodDnistrovskyApi;
