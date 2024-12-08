import { ArticleDto } from "./ArticleDto"
import { CartDto } from "./CartDto"
import { UserDto } from "./UserDto"

export interface ArticleCartUserDto {
  article: ArticleDto
  cart: CartDto
  user: UserDto
}
