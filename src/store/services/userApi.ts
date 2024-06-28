import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/constants'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    updateUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'PUT',
      }),
    }),
    deleteUsers: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
    getUsers: builder.mutation({
      query: (id) => ({
        url: `users/${id}?`,
        method: 'GET',
      }),
    }),
    getUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUsersMutation,
  useGetUsersMutation,
  useGetUserMutation,
} = userApi
