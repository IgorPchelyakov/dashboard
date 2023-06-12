import { newsPodilskApi } from '@/redux/services/regionsNews/Odesa/podilsk';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsPodilsk: News[] | null;
}

const initialState: InitialState = {
  newsPodilsk: null,
};

const newsPodilskSlice = createSlice({
  name: 'newsPodilsk',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsPodilskApi.endpoints.getAllPodilskNews.matchFulfilled,
      (state, action) => {
        state.newsPodilsk = action.payload;
      },
    );
  },
});

export default newsPodilskSlice.reducer;

export const selectPodilskNews = (state: RootState) =>
  state.newsPodilsk.newsPodilsk;
