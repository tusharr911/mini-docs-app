import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import { initialState, tagTitleDefault } from "../src/lib/constants";
const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initializeTodos: (state, action) => {
      state.todoArrayInitial = action.payload.todoArray;
    },
    handleAddTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        desc: action.payload.text,
        date: action.payload.date,
        completedStatus: false,
        tagTitle: tagTitleDefault,
      };
      state.todoArrayInitial.push(todo);
    },
    handleDelete: (state, action) => {
      state.todoArrayInitial = state.todoArrayInitial.filter(
        (item) => item.id !== action.payload.id
      );
    },
    handleUpdate: (state, action) => {
      state.todoArrayInitial = state.todoArrayInitial.map((item) =>
        item.id === action.payload.id
          ? { ...item, desc: action.payload.trimmedText }
          : item
      );
    },
    handleToggleComplete: (state, action) => {
      state.todoArrayInitial = state.todoArrayInitial.map((item) =>
        item.id === action.payload.id
          ? { ...item, completedStatus: !item.completedStatus }
          : item
      );
    },
  },
});

/* Selector function to get the data from Slice */
export const TodoSliceSelector = createSelector(
  (state) => state.todo,
  (todoSlice) => todoSlice.todoArrayInitial
);

export default TodoSlice.reducer;

export const {
  handleAddTodo,
  handleDelete,
  handleUpdate,
  handleToggleComplete,
  initializeTodos,
} = TodoSlice.actions;
