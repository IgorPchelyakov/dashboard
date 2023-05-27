import { mediaApi } from '@/redux/services/media';
import { RootState } from '@/redux/store';
import { Media } from '@/types/media';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  media: Media[] | null;
}

const initialState: InitialState = {
  media: null,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      mediaApi.endpoints.getAllMedia.matchFulfilled,
      (state, action) => {
        state.media = action.payload;
      },
    );
  },
});

export default mediaSlice.reducer;

export const selectMedia = (state: RootState) => state.media.media;
