import { newsApi } from '@/redux/services/news';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  news: News[] | null;
}

const initialState: InitialState = {
  news: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsApi.endpoints.getAllNews.matchFulfilled,
      (state, action) => {
        state.news = action.payload;
      },
    );
  },
});

export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.news;
