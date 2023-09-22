import { countersApi } from '@/redux/services/counters';
import { RootState } from '@/redux/store';
import { Counter } from '@/types/counter';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  counter: Counter | null;
}

const initialState: InitialState = {
  counter: null,
};

const countersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      countersApi.endpoints.countAllNationalNews.matchFulfilled,
      (state, action) => {
        state.counter = action.payload;
      },
    );
  },
});

export default countersSlice.reducer;

export const selectCounters = (state: RootState) => state.counters.counter;
