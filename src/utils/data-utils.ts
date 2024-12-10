import { ArticleDto } from "../api/dtos/ArticleDto";
import { data } from '../constants/data';

export function getRandomizedArticle(): ArticleDto {
  const randomId = getRandomInt();
  return {
    ...data['article'],
    id: randomId,    
    price: data['article'].price + randomId,
    title: `${randomId}_${data['article'].title}`

  }
}

export function getRandomInt(max: number = 999999999): number {
  return Math.floor(Math.random() * max);
}