import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
