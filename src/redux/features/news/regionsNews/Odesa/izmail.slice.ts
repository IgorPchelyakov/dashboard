import { newsIzmailApi } from '@/redux/services/regionsNews/Odesa/izmail';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsIzmail: News[] | null;
}

const initialState: InitialState = {
  newsIzmail: null,
};

const newsIzmailSlice = createSlice({
  name: 'newsIzmail',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsIzmailApi.endpoints.getAllIzmailNews.matchFulfilled,
      (state, action) => {
        state.newsIzmail = action.payload;
      },
    );
  },
});

export default newsIzmailSlice.reducer;

export const selectIzmailNews = (state: RootState) =>
  state.newsIzmail.newsIzmail;
