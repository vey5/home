import { configureStore } from '@reduxjs/toolkit'
import { sessionApi } from './services/sessionApi'

export const store = configureStore({
  reducer: {
    [sessionApi.reducerPath]: sessionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionApi.middleware),
})
