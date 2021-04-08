import { StateInterface, TodoInterface } from "../../types";

export const selectTodos = (state: StateInterface): Array<TodoInterface> =>
  state.todos;
