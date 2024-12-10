import { ArticleModel } from "../models/ArticleModel";
import { articleApi } from "../api/articleApi";
import { ArticleSimpleDto } from "../api/dtos/ArticleDto";

export interface IArticleService {
  getArticleList(): Promise<ArticleSimpleDto[]>
  getArticle(articleId: number): Promise<ArticleModel>
}

export const articleService: IArticleService = {
  async getArticleList(): Promise<ArticleSimpleDto[]> {
    return articleApi.getArticleList()
  },
  async getArticle(articleId: number): Promise<ArticleModel> {
    return articleApi.getArticle(articleId);
  }
}



