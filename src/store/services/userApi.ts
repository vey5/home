import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/constants'
import { Users } from '../../types/api'

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
    getUsers: builder.query<Users, string>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
    getUser: builder.query({
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
  useGetUsersQuery,
  useGetUserQuery,
} = userApi
