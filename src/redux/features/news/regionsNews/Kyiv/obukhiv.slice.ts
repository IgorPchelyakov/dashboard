import { newsObukhivApi } from '@/redux/services/regionsNews/Kyiv/obukhiv';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsObukhiv: News[] | null;
}

const initialState: InitialState = {
  newsObukhiv: null,
};

const newsObukhivSlice = createSlice({
  name: 'newsObukhiv',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsObukhivApi.endpoints.getAllObukhivNews.matchFulfilled,
      (state, action) => {
        state.newsObukhiv = action.payload;
      },
    );
  },
});

export default newsObukhivSlice.reducer;

export const selectObukhivNews = (state: RootState) =>
  state.newsObukhiv.newsObukhiv;
