import { getRandomizedArticle } from "../utils/data-utils";
import { data } from '../constants/data'

export const articles = [
  { 
    ...data['article']
  },
  getRandomizedArticle(),
  getRandomizedArticle()
]
