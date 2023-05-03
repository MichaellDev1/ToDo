import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoReducer = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { name } = action.payload;
      state = state.push({
        id: state.length + Math.floor(Math.random() * 10000),
        name,
        menuShow: false,
        bkg: "#b5b5b5",
        process: "initialized",
      });
    },
    menuShow: (state, action) => {
      const taskDelete = state.findIndex(({ id }) => id == action.payload.id);
      state[taskDelete] = {
        ...state[taskDelete],
        menuShow: !state[taskDelete].menuShow,
      };
    },
    updateProcess: (state, action) => {
      const taskDelete = state.findIndex(({ id }) => id == action.payload.id);
      state[taskDelete] = {
        ...state[taskDelete],
        bkg: action.payload.bkg,
        process: action.payload.process,
      };
    },
    deleteTask: (state, action) => {
      state = state.splice(action.payload.index, 1);
    },
  },
});

export const { addTask, deleteTask, menuShow, updateProcess } =
  todoReducer.actions;
export default todoReducer.reducer;
