import { Media } from '@/types/media';
import { api } from './api';

export const mediaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMedia: builder.query<Media[], void>({
      query: () => ({
        url: '/media',
        method: 'GET',
      }),
    }),
    getMediaById: builder.query<Media, string>({
      query: (id) => ({
        url: `/media/${id}`,
        method: 'GET',
      }),
    }),
    addMedia: builder.mutation<Media, Media>({
      query: (post) => ({
        url: `/media/add`,
        method: 'POST',
        body: post,
      }),
    }),
    editMedia: builder.mutation<string, Media>({
      query: (post) => ({
        url: `/media/edit/${post.id}`,
        method: 'PUT',
        body: post,
      }),
    }),
    removeMedia: builder.mutation<string, string>({
      query: (id) => ({
        url: `/media/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllMediaQuery,
  useGetMediaByIdQuery,
  useAddMediaMutation,
  useEditMediaMutation,
  useRemoveMediaMutation,
} = mediaApi;

export const {
  endpoints: { getAllMedia, getMediaById, addMedia, editMedia, removeMedia },
} = mediaApi;
