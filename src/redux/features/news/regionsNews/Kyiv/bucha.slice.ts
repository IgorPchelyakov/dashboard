import { newsBuchaApi } from '@/redux/services/regionsNews/Kyiv/bucha';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBucha: News[] | null;
}

const initialState: InitialState = {
  newsBucha: null,
};

const newsBuchaSlice = createSlice({
  name: 'newsBucha',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBuchaApi.endpoints.getAllBuchaNews.matchFulfilled,
      (state, action) => {
        state.newsBucha = action.payload;
      },
    );
  },
});

export default newsBuchaSlice.reducer;

export const selectBuchaNews = (state: RootState) => state.newsBucha.newsBucha;
