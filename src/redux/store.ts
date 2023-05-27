import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from './features/login/login.slice';
import employeesReducer from './features/employees/employees.slice';
import postsReducer from './features/posts/posts.slice';
import mediaReducer from './features/media/media.slice';
import bannerReducer from './features/banners/banners.slice';
import { api } from './services/api';
import { listenerMiddleware } from '@/middleware/auth';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  employees: employeesReducer,
  posts: postsReducer,
  media: mediaReducer,
  banners: bannerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
