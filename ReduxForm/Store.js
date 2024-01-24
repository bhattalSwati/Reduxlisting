import { configureStore } from '@reduxjs/toolkit'
import Reducer from './CounterSlice';

const store = configureStore({
  reducer: {
    user: Reducer 
  }
})

export default store;