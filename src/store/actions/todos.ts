import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_TEXT,
  SET_TODO_COMPLETED,
} from "../reducers/todos";

import { TodoInterface, TodoActionInterface } from "../../types";

export const addTodo = (todo: TodoInterface): TodoActionInterface => ({
  type: ADD_TODO,
  todo: todo,
});

export const setTodoCompleted = (
  todo: TodoInterface,
  completed: boolean
): TodoActionInterface => ({
  type: SET_TODO_COMPLETED,
  todo: todo,
  completed: completed,
});

export const deleteTodo = (todo: TodoInterface): TodoActionInterface => ({
  type: DELETE_TODO,
  todo: todo,
});

export const setTodoText = (
  todo: TodoInterface,
  text: string
): TodoActionInterface => ({
  type: SET_TODO_TEXT,
  todo: todo,
  text: text,
});
