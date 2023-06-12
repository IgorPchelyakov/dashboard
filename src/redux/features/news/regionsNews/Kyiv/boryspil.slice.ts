import { newsBoryspilApi } from '@/redux/services/regionsNews/Kyiv/boryspil';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBoryspil: News[] | null;
}

const initialState: InitialState = {
  newsBoryspil: null,
};

const newsBoryspilSlice = createSlice({
  name: 'newsBoryspil',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBoryspilApi.endpoints.getAllBoryspilNews.matchFulfilled,
      (state, action) => {
        state.newsBoryspil = action.payload;
      },
    );
  },
});

export default newsBoryspilSlice.reducer;

export const selectPosts = (state: RootState) =>
  state.newsBoryspil.newsBoryspil;
