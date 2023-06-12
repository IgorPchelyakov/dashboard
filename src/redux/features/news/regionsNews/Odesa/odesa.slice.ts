import { newsOdesaApi } from '@/redux/services/regionsNews/Odesa/odesa';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsOdesa: News[] | null;
}

const initialState: InitialState = {
  newsOdesa: null,
};

const newsOdesaSlice = createSlice({
  name: 'newsOdesa',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsOdesaApi.endpoints.getAllOdesaNews.matchFulfilled,
      (state, action) => {
        state.newsOdesa = action.payload;
      },
    );
  },
});

export default newsOdesaSlice.reducer;

export const selectOdesaNews = (state: RootState) => state.newsOdesa.newsOdesa;
