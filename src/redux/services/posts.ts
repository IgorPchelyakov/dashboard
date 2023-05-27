import { api } from './api';
import { Post } from '@/types/post';

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => ({
        url: `/post/${id}`,
        method: 'GET',
      }),
    }),
    addPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: `/post/add`,
        method: 'POST',
        body: post,
      }),
    }),
    editPost: builder.mutation<string, Post>({
      query: (post) => ({
        url: `/post/edit/${post.id}`,
        method: 'PUT',
        body: post,
      }),
    }),
    removePost: builder.mutation<string, string>({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useEditPostMutation,
  useRemovePostMutation,
} = postsApi;

export const {
  endpoints: { getAllPosts, getPostById, addPost, editPost, removePost },
} = postsApi;
