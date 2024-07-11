import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/constants'
import { getCookie } from '../../pages/Login'

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
        headers: {
          Autorization: `Bearer ${getCookie('token')}`,
        },
      }),
    }),
    Logout: builder.query({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation } = sessionApi
export const { useLogoutQuery } = sessionApi
