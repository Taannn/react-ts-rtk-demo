import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from '../features/cake/cakeSlice'
// we import here the reducer generated and named it cakeReducer
import icecreamReducer from '../features/icecream/icecreamSlice'
// import icecream reducer
import userReducer from '../features/user/userSlice'
import loadingReducer from '../features/user/loadingSlice'
import anotherUserReducer from '../features/user/anotherUserSlice'

// store only as much state in the store that must be accessible globally if needed and anything else should exist in the local state of components

// const logger  = reduxLogger.createLogger()

// we put all the reducers of each feature we have in the reducer object
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    loading: loadingReducer,
    anotherUser: anotherUserReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store

// we're gonna export built-in types for root and app that we will be using :)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// the convetion fo using these types is by making another file called hooks.ts :)