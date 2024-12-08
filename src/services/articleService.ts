import { ArticleModel } from "../models/ArticleModel";
import { articleApi } from "../api/articleApi";

export interface IArticleService {
  getArticleList(): Promise<ArticleModel[]>
  getArticle(articleId: number): Promise<ArticleModel>
}

export const articleService: IArticleService = {
  async getArticleList(): Promise<ArticleModel[]> {
    return articleApi.getArticleList()
  },
  async getArticle(articleId: number): Promise<ArticleModel> {
    return articleApi.getArticle(articleId);
  }
}



