import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/constants'
import { Users } from '../../types/api'
import { User } from '../../types/api'
import { getCookie } from '../../pages/Login'

// const setCookie = (name: any, token: any) => {
//   Cookie.set(name, token, {
//     expires: 3,
//     secure: true,
//     sameSite: 'strict',
//     path: '/',
//   })
// }

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
        headers: { Autorization: `Bearer ${getCookie('token')}` },
      }),
    }),
    getUser: builder.query<User, number>({
      query: (id) => `users/${id}`,
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
