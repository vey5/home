import { configureStore } from '@reduxjs/toolkit'
import { sessionApi } from './services/sessionApi'
import { userApi } from './services/userApi'

export const store = configureStore({
  reducer: {
    [sessionApi.reducerPath]: sessionApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionApi.middleware),
})
