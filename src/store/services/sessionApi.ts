import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/constants'

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation } = sessionApi
export const { useLogoutQuery } = sessionApi
