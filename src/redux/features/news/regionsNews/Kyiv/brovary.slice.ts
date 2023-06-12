import { newsBrovaryApi } from '@/redux/services/regionsNews/Kyiv/brovary';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBrovary: News[] | null;
}

const initialState: InitialState = {
  newsBrovary: null,
};

const newsBrovarySlice = createSlice({
  name: 'newsBrovary',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBrovaryApi.endpoints.getAllBrovaryNews.matchFulfilled,
      (state, action) => {
        state.newsBrovary = action.payload;
      },
    );
  },
});

export default newsBrovarySlice.reducer;

export const selectBrovaryNews = (state: RootState) =>
  state.newsBrovary.newsBrovary;
