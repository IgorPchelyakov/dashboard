import { newsApi } from '@/redux/services/news';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBilacerkva: News[] | null;
}

const initialState: InitialState = {
  newsBilacerkva: null,
};

const newsBilacerkvaSlice = createSlice({
  name: 'newsBilacerkva',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsApi.endpoints.getAllNews.matchFulfilled,
      (state, action) => {
        state.newsBilacerkva = action.payload;
      },
    );
  },
});

export default newsBilacerkvaSlice.reducer;

export const selectPosts = (state: RootState) =>
  state.newsBilacerkva.newsBilacerkva;
