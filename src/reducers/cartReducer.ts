import { addToCart, CartActions, fetchCartFulfilled } from "../actions/cartActions";
import { CartModel } from "../models/CartModel";

export function cartReducer(state: CartModel = { items: 0, total_costs: 0}, action: CartActions): CartModel {  
  switch(action.type) {
    case 'ADD_TO_CART': {
      const { payload } = action as ReturnType<typeof addToCart>      
      return {
        ...state,
        items: state.items + payload.count,
        total_costs: state.total_costs + payload.count * payload.pricePerOneCount
      }
    }
    
    case 'FETCH_CART_PENDING': {
      return {
        items: 0,
        total_costs: 0
      }
    }
    
    case 'FEETCH_CART_FULFILLED': {
      const { payload } = action as ReturnType<typeof fetchCartFulfilled>;
      return {
        ...payload.cart
      }
    }

    default: {
      return state;
    }
  }

}