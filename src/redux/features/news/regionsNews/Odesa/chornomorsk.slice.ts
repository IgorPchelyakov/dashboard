import { newsChornomorskApi } from '@/redux/services/regionsNews/Odesa/chornomorsk';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsChornomorsk: News[] | null;
}

const initialState: InitialState = {
  newsChornomorsk: null,
};

const newsChornomorskSlice = createSlice({
  name: 'newsChornomorsk',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsChornomorskApi.endpoints.getAllChornomorskNews.matchFulfilled,
      (state, action) => {
        state.newsChornomorsk = action.payload;
      },
    );
  },
});

export default newsChornomorskSlice.reducer;

export const selectChornomorskNews = (state: RootState) =>
  state.newsChornomorsk.newsChornomorsk;
