import { newsVyshneveApi } from '@/redux/services/regionsNews/Kyiv/vyshneve';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsVyshneve: News[] | null;
}

const initialState: InitialState = {
  newsVyshneve: null,
};

const newsVyshneveSlice = createSlice({
  name: 'newsVyshneve',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsVyshneveApi.endpoints.getAllVyshneveNews.matchFulfilled,
      (state, action) => {
        state.newsVyshneve = action.payload;
      },
    );
  },
});

export default newsVyshneveSlice.reducer;

export const selectVyshneveNews = (state: RootState) =>
  state.newsVyshneve.newsVyshneve;
