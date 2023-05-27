import { bannersApi } from '@/redux/services/banners';
import { RootState } from '@/redux/store';
import { Banner } from '@/types/banner';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  banners: Banner[] | null;
}

const initialState: InitialState = {
  banners: null,
};

const bannerSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      bannersApi.endpoints.getAllBanners.matchFulfilled,
      (state, action) => {
        state.banners = action.payload;
      },
    );
  },
});

export default bannerSlice.reducer;

export const selectBanners = (state: RootState) => state.banners.banners;
