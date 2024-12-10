import { CartActions } from "./actions/cartActions"
import { CartModel } from "./models/CartModel"
import { createStore, Store, Dispatch } from 'redux';
import { cartReducer } from "./reducers/cartReducer";

export const store: Store<CartModel, CartActions> & {
  dispatch: Dispatch
} = createStore(cartReducer);

export type StoreType = CartModel;
export type StoreActions = CartActions;