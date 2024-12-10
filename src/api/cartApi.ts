import { cart } from '../constants/cart-data'
import { CartDto } from "./dtos/CartDto";

export interface ICartApi {  
  getCart(): Promise<CartDto>
}

export const cartApi: ICartApi = {
  async getCart(): Promise<CartDto> {
    return {
      ...cart
    }
  }
}
