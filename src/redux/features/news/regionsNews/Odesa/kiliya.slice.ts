import { newsKiliyaApi } from '@/redux/services/regionsNews/Odesa/kiliya';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsKiliya: News[] | null;
}

const initialState: InitialState = {
  newsKiliya: null,
};

const newsKiliyaSlice = createSlice({
  name: 'newsKiliya',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsKiliyaApi.endpoints.getAllKiliyaNews.matchFulfilled,
      (state, action) => {
        state.newsKiliya = action.payload;
      },
    );
  },
});

export default newsKiliyaSlice.reducer;

export const selectKiliyaNews = (state: RootState) =>
  state.newsKiliya.newsKiliya;
