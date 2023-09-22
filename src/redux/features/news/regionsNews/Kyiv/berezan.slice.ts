import { newsBerezanApi } from '@/redux/services/regionsNews/Kyiv/berezan';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBerezan: News[] | null;
}

const initialState: InitialState = {
  newsBerezan: null,
};

const newsBerezanSlice = createSlice({
  name: 'newsBerezan',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBerezanApi.endpoints.getAllBerezanNews.matchFulfilled,
      (state, action) => {
        state.newsBerezan = action.payload;
      },
    );
  },
});

export default newsBerezanSlice.reducer;

export const selectPosts = (state: RootState) => state.newsBerezan.newsBerezan;
