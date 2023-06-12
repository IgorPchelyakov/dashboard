import { newsPereyaslavApi } from '@/redux/services/regionsNews/Kyiv/pereyaslav';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsPereyaslav: News[] | null;
}

const initialState: InitialState = {
  newsPereyaslav: null,
};

const newsPereyaslavSlice = createSlice({
  name: 'newsPereyaslav',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsPereyaslavApi.endpoints.getAllPereyaslavNews.matchFulfilled,
      (state, action) => {
        state.newsPereyaslav = action.payload;
      },
    );
  },
});

export default newsPereyaslavSlice.reducer;

export const selectPereyaslavNews = (state: RootState) =>
  state.newsPereyaslav.newsPereyaslav;
