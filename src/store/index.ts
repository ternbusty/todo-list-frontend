import { createStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import { todosReducer } from "./reducers";

const reducers = combineReducers({
  todos: todosReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
