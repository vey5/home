import { configureStore } from '@reduxjs/toolkit'
import { sessionApi } from './services/sessionApi'
import { userApi } from './services/userApi'
import cabinetReducer from './slices/cabinetSlice'

export const store = configureStore({
  reducer: {
    [sessionApi.reducerPath]: sessionApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    form: cabinetReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionApi.middleware).concat(userApi.middleware),
})
