import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
}

export const counterSlice = createSlice({
  name: 'setpage',
  initialState,
  reducers: {
    setPage: (state,action) => {
      state.value = action.payload
    },    
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = counterSlice.actions

export default counterSlice.reducer