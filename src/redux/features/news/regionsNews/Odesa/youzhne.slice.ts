import { newsYouzhneApi } from '@/redux/services/regionsNews/Odesa/youzhne';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsYouzhne: News[] | null;
}

const initialState: InitialState = {
  newsYouzhne: null,
};

const newsYouzhneSlice = createSlice({
  name: 'newsYouzhne',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsYouzhneApi.endpoints.getAllYouzhneNews.matchFulfilled,
      (state, action) => {
        state.newsYouzhne = action.payload;
      },
    );
  },
});

export default newsYouzhneSlice.reducer;

export const selectYouzhneNews = (state: RootState) =>
  state.newsYouzhne.newsYouzhne;
