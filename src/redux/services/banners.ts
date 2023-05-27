import { Banner } from '@/types/banner';
import { api } from './api';

export const bannersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query<Banner[], void>({
      query: () => ({
        url: '/banners',
        method: 'GET',
      }),
    }),
    getBannerById: builder.query<Banner, string>({
      query: (id) => ({
        url: `/banner/${id}`,
        method: 'GET',
      }),
    }),
    addBanner: builder.mutation<Banner, Banner>({
      query: (post) => ({
        url: `/banner/add`,
        method: 'POST',
        body: post,
      }),
    }),
    editBanner: builder.mutation<string, Banner>({
      query: (post) => ({
        url: `/banner/edit/${post.id}`,
        method: 'PUT',
        body: post,
      }),
    }),
    removeBanner: builder.mutation<string, string>({
      query: (id) => ({
        url: `/banner/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  useAddBannerMutation,
  useEditBannerMutation,
  useRemoveBannerMutation,
} = bannersApi;

export const {
  endpoints: {
    getAllBanners,
    getBannerById,
    addBanner,
    editBanner,
    removeBanner,
  },
} = bannersApi;
