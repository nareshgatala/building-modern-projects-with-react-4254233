import { createSelector } from 'reselect';

export const getTodos = (state) => state.todos.value;
export const getIsLoading = (state) => state.loading.isLoading;
export const getLoadingError = (state) => state.loading.error;

export const getCompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => todo.isCompleted)
);

export const getIncompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => !todo.isCompleted)
);