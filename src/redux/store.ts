import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import loginSlice from './features/login/login.slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
