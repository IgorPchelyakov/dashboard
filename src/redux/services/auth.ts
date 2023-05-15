import { api } from './api';

type UserData = {
  login: string;
  password: string;
};
type ResponseLoginData = UserData & { id: string; token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useCurrentQuery } = authApi;

export const {
  endpoints: { login, current },
} = authApi;
