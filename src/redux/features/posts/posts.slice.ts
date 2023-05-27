import { postsApi } from '@/redux/services/posts';
import { RootState } from '@/redux/store';
import { Post } from '@/types/post';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  posts: Post[] | null;
}

const initialState: InitialState = {
  posts: null,
};

const postSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getAllPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      },
    );
  },
});

export default postSlice.reducer;

export const selectPosts = (state: RootState) => state.posts.posts;
