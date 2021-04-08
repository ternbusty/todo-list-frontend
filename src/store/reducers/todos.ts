import produce from "immer";

import { emptyTodo, initialTodos } from "../../utils";
import { TodoInterface, TodoActionInterface } from "../../types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODO_TEXT = "SET_TODO_TEXT";
export const SET_TODO_COMPLETED = "SET_TODO_COMPLETED";

const todosReducer = produce(
  (
    draft: Array<TodoInterface>,
    { type, todo, text, completed }: TodoActionInterface
  ) => {
    switch (type) {
      case ADD_TODO:
        draft.unshift(todo);
        break;
      case DELETE_TODO:
        draft.splice(
          draft.indexOf(draft.find((x) => x.id === todo.id) || emptyTodo),
          1
        );
        break;
      case SET_TODO_COMPLETED:
        (
          draft.find((x) => x.id === todo.id) || emptyTodo
        ).completed = completed;
        break;
      case SET_TODO_TEXT:
        (draft.find((x) => x.id === todo.id) || emptyTodo).text =
          text || todo.text;
        break;
      default:
        break;
    }
  },
  initialTodos
);

export default todosReducer;
