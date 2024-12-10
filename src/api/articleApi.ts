import { ArticleDto, ArticleSimpleDto } from "./dtos/ArticleDto"
import { articles } from '../constants/articles-data'
import _pick from 'lodash.pick';

export interface IArticleApi {
  getArticleList(): Promise<ArticleSimpleDto[]>
  getArticle(articleId: number): Promise<ArticleDto>
}

export const articleApi: IArticleApi = {
  async getArticleList(): Promise<ArticleSimpleDto[]> {
    return ([
      ...articles
    ].map( article => _pick(article, ['id', 'title', 'images'])));
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



