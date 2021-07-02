import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface LoginApiParams {
  u: string
}

export interface User {
  user_id: string
  user_name: string
}

export interface LoginApiRes {
  token: string
  user: User
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<LoginApiRes, LoginApiParams>({
      query: (params) => ({
        url: 'https://www.fastmock.site/mock/4c2232c050ed9e7bdb0bb88543009ee5/tsreact-api/sessions',
        method: 'post',
        body: params,
      }),
      transformResponse: (response: { data: LoginApiRes }) => {
        return response.data
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
