import { cartApi } from "../api/cartApi";
import { CartModel } from "../models/CartModel";

export interface ICartService {  
  getCart(): Promise<CartModel>
}

export const cartService: ICartService = {
  async getCart(): Promise<CartModel> {
    return cartApi.getCart();
  }
}