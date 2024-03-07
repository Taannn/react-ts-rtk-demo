import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  numOfCakes: number;
}

const initialState: InitialState = {
  numOfCakes: 10
}

// why direct mutation is possible here? it's because createSlice has immer built-in under the hood so redux toolkit fixes this in our behalf :)
const cakeSlice = createSlice({
  name: 'cake',
  // initialState: initialState,  normal but but if same name using es6 syntax, what lies below is recommended for use
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    // number becasue our payload is a number for this one
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload
    },
    increment: (state) => {
      state.numOfCakes++
    },
  },
})

// default export
export default cakeSlice.reducer
// named export
export const { ordered, restocked, increment } = cakeSlice.actions


// cakeActions is like destructuring but the other way around storing the generated actions inside so we can import cakeAction on the store
// import { cakeAction } = '/ourmodule';


// the normal equivalent of the advanced version up top and the exact generated reducer and actions generated based on the properties of cakeSlice

// function cakeReducer(state = { numOfCakes: 10 }, action) {
//   switch (action.type) {
//     case 'cake/ordered':
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case 'cake/restocked':
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };
//     default:
//       return state;
//   }
// }

// const cakeActions = {
//   ordered: () => ({ type: 'cake/ordered' }),
//   restocked: (payload) => ({ type: 'cake/restocked', payload }),
// };