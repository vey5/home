import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CabinetState {
  isModalOpen: boolean
  selectedUserId: number | null
}

const initialState: CabinetState = {
  isModalOpen: false,
  selectedUserId: null,
}

export const cabinetSlice = createSlice({
  name: 'cabinet',
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload
      console.log(state)
      console.log(action)
    },
    setModalOpen: (state) => {
      state.isModalOpen = true
      console.log(state)
    },
    setModalClose: (state) => {
      state.isModalOpen = false
      console.log(state)
    },
  },
})

export const { setSelectedUserId, setModalClose, setModalOpen } = cabinetSlice.actions

export default cabinetSlice.reducer
