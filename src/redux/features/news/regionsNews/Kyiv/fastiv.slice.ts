import { newsFastivApi } from '@/redux/services/regionsNews/Kyiv/fastiv';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsFastiv: News[] | null;
}

const initialState: InitialState = {
  newsFastiv: null,
};

const newsFastivSlice = createSlice({
  name: 'newsFastiv',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsFastivApi.endpoints.getAllFastivNews.matchFulfilled,
      (state, action) => {
        state.newsFastiv = action.payload;
      },
    );
  },
});

export default newsFastivSlice.reducer;

export const selectFastivNews = (state: RootState) =>
  state.newsFastiv.newsFastiv;
