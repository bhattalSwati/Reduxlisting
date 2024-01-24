import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const formSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers: {
    addUser: (state, action) => {
      console.log('action is here',action)
      console.log('count is',state.data.length)
      state.data.push(action.payload);
    },

    updateUser: (state, action) => {
      const indexToUpdate = state.data.findIndex(
        user => user.id === action.payload.id,
      );
      state.data[indexToUpdate] = action.payload;
    },

    deleteUser: (state, action) => {
      const indexToUpdate = state.data.findIndex(
        user => user.id === action.payload.id,
      );
      state.data.splice(indexToUpdate, 1);
    },
  },
});

export const {addUser, updateUser, deleteUser} = formSlice.actions;
export const selectUser = state => state.user.data;
const Reducer = formSlice.reducer
export default Reducer;
