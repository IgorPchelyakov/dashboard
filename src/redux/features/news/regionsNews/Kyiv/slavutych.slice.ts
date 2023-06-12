import { newsSlavutychApi } from '@/redux/services/regionsNews/Kyiv/slavutych';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsSlavutych: News[] | null;
}

const initialState: InitialState = {
  newsSlavutych: null,
};

const newsSlavutychSlice = createSlice({
  name: 'newsSlavutych',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsSlavutychApi.endpoints.getAllSlavutychNews.matchFulfilled,
      (state, action) => {
        state.newsSlavutych = action.payload;
      },
    );
  },
});

export default newsSlavutychSlice.reducer;

export const selectSlavutychNews = (state: RootState) =>
  state.newsSlavutych.newsSlavutych;
