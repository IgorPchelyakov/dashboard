import { newsYagotynApi } from '@/redux/services/regionsNews/Kyiv/yagotyn';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsYagotyn: News[] | null;
}

const initialState: InitialState = {
  newsYagotyn: null,
};

const newsYagotynSlice = createSlice({
  name: 'newsYagotyn',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsYagotynApi.endpoints.getAllYagotynNews.matchFulfilled,
      (state, action) => {
        state.newsYagotyn = action.payload;
      },
    );
  },
});

export default newsYagotynSlice.reducer;

export const selectYagotynNews = (state: RootState) =>
  state.newsYagotyn.newsYagotyn;
