import { createSlice } from "@reduxjs/toolkit";



const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const todoslice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addtodo: (state, action) => {
     state.push(action.payload);
    },

    deletetodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updatetodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
  },
});
export const {addtodo , updatetodo , deletetodo} = todoslice.actions;
export default todoslice.reducer;