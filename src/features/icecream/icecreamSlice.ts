import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

type InitialState = {
  numOfIceCreams: number;
}

const initialState: InitialState = {
  numOfIceCreams: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload
    },
  },
  // adding an extra reducer, so that this slice can respond to toehr slice's actions too
  // when the 1st param action is dispatched, the 2nd param fn dispatches too
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--
    })
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions