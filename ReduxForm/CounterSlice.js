import {createSlice} from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers: {
    addUser: (state, action) => {
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

export const {setUser, addUser, updateUser, deleteUser} = formSlice.actions;
export const selectUser = state => state.user.data;
export default formSlice.reducer;
