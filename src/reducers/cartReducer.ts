import { addToCart, CartActions, fetchCartFulfilled, fetchCartRejected } from "../actions/cartActions";
import { CartModel } from "../models/CartModel";

export type CartState = { data: CartModel, loading: boolean, error?: unknown };
const DEFAUT_CART_STATE: CartState = {
  data: {
    items: 0,
    total_costs: 0
  },
  loading: false
}

export function cartReducer(state: CartState = DEFAUT_CART_STATE, action: CartActions): CartState {  
  switch(action.type) {
    case 'ADD_TO_CART': {
      const { payload } = action as ReturnType<typeof addToCart>      
      return {
        ...state,
        data: {
          items: state.data.items + payload.count,
          total_costs: state.data.total_costs + payload.count * payload.pricePerOneCount            
        }
      }
    }
    
    case 'FETCH_CART_PENDING': {
      return {        
        data: {
          items: 0,
          total_costs: 0
        },
        loading: true
      }
    }
    
    case 'FEETCH_CART_FULFILLED': {
      const { payload } = action as ReturnType<typeof fetchCartFulfilled>;
      return {
        ...state,
        data: {
          ...payload.cart
        },
        loading: false
      }
    }

    case 'FETCH_CART_REJECTED': {
      const { payload } = action as ReturnType<typeof fetchCartRejected>;
      return {
        ...state,
        data: {
          items: 0,
          total_costs: 0
        },
        loading: false,
        error: payload.error
      }
    }

    default: {
      return state;
    }
  }
}