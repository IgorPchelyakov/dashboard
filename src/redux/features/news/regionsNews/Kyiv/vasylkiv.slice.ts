import { newsVasylkivApi } from '@/redux/services/regionsNews/Kyiv/vasylkiv';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsVasylkiv: News[] | null;
}

const initialState: InitialState = {
  newsVasylkiv: null,
};

const newsVasylkivSlice = createSlice({
  name: 'newsVasylkiv',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsVasylkivApi.endpoints.getAllVasylkivNews.matchFulfilled,
      (state, action) => {
        state.newsVasylkiv = action.payload;
      },
    );
  },
});

export default newsVasylkivSlice.reducer;

export const selectVasylkivNews = (state: RootState) =>
  state.newsVasylkiv.newsVasylkiv;
