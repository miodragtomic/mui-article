import { ArticleDto } from "../api/dtos/ArticleDto";
import { data } from '../constants/data';

export function getRandomizedArticle(): ArticleDto {
  const increment = getRandomInt(4);
  return {
    ...data['article'],
    id: getRandomInt(),    
    price: data['article'].price + increment,
    title: `${increment}_${data['article'].title}`

  }
}

export function getRandomInt(max: number = 999999999): number {
  return Math.floor(Math.random() * max);
}