import { combineReducers } from "redux";
import { articleReducer } from "../reducers/articleReducer";
import { cartReducer } from "../reducers/cartReducer";

export const rootReducer = combineReducers({
  article: articleReducer,
  cart: cartReducer
})