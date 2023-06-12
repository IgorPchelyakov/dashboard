import { newsIrpinApi } from '@/redux/services/regionsNews/Kyiv/irpin';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsIrpin: News[] | null;
}

const initialState: InitialState = {
  newsIrpin: null,
};

const newsIrpinSlice = createSlice({
  name: 'newsIrpin',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsIrpinApi.endpoints.getAllIrpinNews.matchFulfilled,
      (state, action) => {
        state.newsIrpin = action.payload;
      },
    );
  },
});

export default newsIrpinSlice.reducer;

export const selectIrpinNews = (state: RootState) => state.newsIrpin.newsIrpin;
