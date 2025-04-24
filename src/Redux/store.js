import { legacy_createStore } from "redux";
import { cartReducer } from "./reducer";

export const cartStore = legacy_createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
