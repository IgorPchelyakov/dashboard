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
  }),
});

export const {
  useGetAllBilgorodDnistrovskyNewsQuery,
  useGetBilgorodDnistrovskyNewsByIdQuery,
} = newsBilgorodDnistrovskyApi;

export const {
  endpoints: { getAllBilgorodDnistrovskyNews, getBilgorodDnistrovskyNewsById },
} = newsBilgorodDnistrovskyApi;
