import  { createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [{
      text: 'Go to store',
      isCompleted: true
    }, {
        text: 'New todo',
        isCompleted: false
    }],
  },
  reducers: {
    createTodo: (state, action) => {
      const Inputtext = action.payload;
      state.value = [...state.value, {
        text: Inputtext,
        isCompleted: false
      }];
    },
    markTodoAsCompleted: (state, action) => {
      const text = action.payload;
      const todo = state.value.find(t => t.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const text = action.payload;
      state.value = state.value.filter(t => t.text !== text);
    },
  }
})

export const {createTodo, markTodoAsCompleted , deleteTodo} = todoSlice.actions;