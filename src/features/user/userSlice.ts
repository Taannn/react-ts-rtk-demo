import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoading } from './loadingSlice'

// the type for what we want to get from the fetch
// type Users = {
//   pruduct_id: number;
//   product_rating: number;
// }
export type Users = {
  id: number;
  name: string;
}

type InitialState = {
  // loading: boolean;
  users: Users[];
  error: string;
}

const initialState: InitialState = {
  // loading: false,
  users: [],
  error: ''
}

// accepts 2 param, 1. action name/action type, 2.cb fn creating payload
// createAsyncThunk generates(promise) pending, fulfilled and rejected action types
// we can also listen to this action types using reducer

// createAsyncThunk dispatches the lifecycle of promises as actions (e.g. fetchUsers.pending)
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { dispatch }) => {
//   const response = await axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     // .get('http://localhost:3001/kopii/shop');
//   return response.data;
//   // return response.data.data;
// })

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
})


// redux toolkit has createaAsyncThunk to allow async actions without thunk middleware, since it might be built in like immer to createSlice
// since we do not have reducers prop, it means createSlice wont be able to generate a reducer fn so we'll ad it ourselves using extraReducers :)
// pending, fulfillled, and rejected are the generated promises in createAsynceThunk earlier
// now that we have reducers in the form of extraReducers, createslice can now generate a reducer and an action :)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true
    // })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Users[]>) => {
      // state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // state.loading = false
      state.users = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default userSlice.reducer


// in the terminal when node index is run, we can see the initial state becasue of getState and then an update where loading is true signifying fetchUsers.pending, while the last one is fetchUser.fulfilled since we succeccfully fetched it therefore, no error this time :)