import { ArticleDto } from "./dtos/ArticleDto"
import { articles } from '../constants/articles-data'

export interface IArticleApi {
  getArticleList(): Promise<ArticleDto[]>
  getArticle(articleId: number): Promise<ArticleDto>
}

export const articleApi: IArticleApi = {
  async getArticleList(): Promise<ArticleDto[]> {
    return ([
      ...articles
    ]);
  },
  async getArticle(articleId: number): Promise<ArticleDto> {
    const foundIndex = articles.findIndex( a => a.id == articleId);
    if(foundIndex == -1) {
      throw new Error("Article not found");
    }
    return {
      ...articles[foundIndex]
    }
  }
}



