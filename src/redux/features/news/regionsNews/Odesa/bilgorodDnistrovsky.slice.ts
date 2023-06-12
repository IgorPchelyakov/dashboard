import { newsBilgorodDnistrovskyApi } from '@/redux/services/regionsNews/Odesa/BilgorodDnistrovsky';
import { RootState } from '@/redux/store';
import { News } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  newsBilgorodDnistrovsky: News[] | null;
}

const initialState: InitialState = {
  newsBilgorodDnistrovsky: null,
};

const newsBilgorodDnistrovskySlice = createSlice({
  name: 'newsBilgorodDnistrovsky',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsBilgorodDnistrovskyApi.endpoints.getAllBilgorodDnistrovskyNews
        .matchFulfilled,
      (state, action) => {
        state.newsBilgorodDnistrovsky = action.payload;
      },
    );
  },
});

export default newsBilgorodDnistrovskySlice.reducer;

export const selectBilgorodDnistrovskyNews = (state: RootState) =>
  state.newsBilgorodDnistrovsky.newsBilgorodDnistrovsky;
