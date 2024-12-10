import { CartModel } from "../models/CartModel";

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
  }
}

export function fetchCartRejected() {
  return {
    type: 'FETCH_CART_REJECTED'
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

export type CartActions = ReturnType<typeof addToCart> | ReturnType<typeof fetchCartPending> | ReturnType<typeof fetchCartFulfilled>
  | ReturnType<typeof fetchCartRejected>;