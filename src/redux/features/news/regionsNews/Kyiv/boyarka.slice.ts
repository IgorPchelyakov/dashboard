import { newsBoyarkaApi } from '@/redux/services/regionsNews/Kyiv/boyarka';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBoyarka: News[] | null;
}

const initialState: InitialState = {
  newsBoyarka: null,
};

const newsBoyarkaSlice = createSlice({
  name: 'newsBoyarka',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBoyarkaApi.endpoints.getAllBoyarkaNews.matchFulfilled,
      (state, action) => {
        state.newsBoyarka = action.payload;
      },
    );
  },
});

export default newsBoyarkaSlice.reducer;

export const selectPosts = (state: RootState) => state.newsBoyarka.newsBoyarka;
