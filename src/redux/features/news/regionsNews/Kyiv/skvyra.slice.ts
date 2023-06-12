import { newsSkvyraApi } from '@/redux/services/regionsNews/Kyiv/skvyra';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsSkvyra: News[] | null;
}

const initialState: InitialState = {
  newsSkvyra: null,
};

const newsSkvyraSlice = createSlice({
  name: 'newsSkvyra',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsSkvyraApi.endpoints.getAllSkvyraNews.matchFulfilled,
      (state, action) => {
        state.newsSkvyra = action.payload;
      },
    );
  },
});

export default newsSkvyraSlice.reducer;

export const selectSkvyraNews = (state: RootState) =>
  state.newsSkvyra.newsSkvyra;
