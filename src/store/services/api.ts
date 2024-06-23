import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const API_URL = import.meta.env.REACT_APP_API_URL;

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
