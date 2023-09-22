import { newsDniproApi } from '@/redux/services/regionsNews/Dnipro/dnipro';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsDnipro: News[] | null;
}

const initialState: InitialState = {
  newsDnipro: null,
};

const newsDniproSlice = createSlice({
  name: 'newsDnipro',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsDniproApi.endpoints.getAllDniproNews.matchFulfilled,
      (state, action) => {
        state.newsDnipro = action.payload;
      },
    );
  },
});

export default newsDniproSlice.reducer;

export const selectDniproPosts = (state: RootState) => state.newsDnipro.newsDnipro;
