import { newsKyivApi } from '@/redux/services/regionsNews/Kyiv/kyiv';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsKyiv: News[] | null;
}

const initialState: InitialState = {
  newsKyiv: null,
};

const newsKyivSlice = createSlice({
  name: 'newsKyiv',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsKyivApi.endpoints.getAllKyivNews.matchFulfilled,
      (state, action) => {
        state.newsKyiv = action.payload;
      },
    );
  },
});

export default newsKyivSlice.reducer;

export const selectKyivNews = (state: RootState) => state.newsKyiv.newsKyiv;
