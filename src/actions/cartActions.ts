import { Dispatch } from "redux";
import { CartModel } from "../models/CartModel";
import { StoreActions, StoreObjectActions } from "../store";
import { cartService as _cartService, ICartService } from "../services/cartService";

export function fetchCartPending() {
  return {
    type: 'FETCH_CART_PENDING',
  } as const
}

export function fetchCartFulfilled(cart: CartModel) {
  return {
    type: 'FEETCH_CART_FULFILLED',
    payload: {
      cart
    }
  } as const
}

export function fetchCartRejected(error: unknown) {
  return {
    type: 'FETCH_CART_REJECTED',
    payload: {
      error
    }
  } as const
}

export function addToCart(articleId: number, count: number, pricePerOneCount: number) {
  return {
    type: "ADD_TO_CART",
    payload: {
      articleId,
      count,
      pricePerOneCount,
    }
  } as const
}

const cartService: ICartService = _cartService

export function fetchCart() {
  return async function (dispatch: Dispatch<StoreObjectActions>) {
    dispatch(fetchCartPending())
    try {
      const cart = await cartService.getCart();
      dispatch(fetchCartFulfilled(cart));
    }catch(error) {
      dispatch(fetchCartRejected(error));
    }
  }
}

export type CartActions = ReturnType<typeof addToCart> | ReturnType<typeof fetchCartPending> | ReturnType<typeof fetchCartFulfilled>
  | ReturnType<typeof fetchCartRejected>;