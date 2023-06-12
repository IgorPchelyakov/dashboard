import { newsVyshhorodApi } from '@/redux/services/regionsNews/Kyiv/vyshhorod';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsVyshhorod: News[] | null;
}

const initialState: InitialState = {
  newsVyshhorod: null,
};

const newsVyshhorodSlice = createSlice({
  name: 'newsVyshhorod',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsVyshhorodApi.endpoints.getAllVyshhorodNews.matchFulfilled,
      (state, action) => {
        state.newsVyshhorod = action.payload;
      },
    );
  },
});

export default newsVyshhorodSlice.reducer;

export const selectVyshhorodNews = (state: RootState) =>
  state.newsVyshhorod.newsVyshhorod;
