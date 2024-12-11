import { Dispatch } from "redux";
import { ArticleModel } from "../models/ArticleModel";
import { articleService } from "../services/articleService";
import { StoreActions, StoreObjectActions } from "../store";

export function fetchArticlePending() {
  return {
    type: 'FETCH_ARTICLE_PENDING',
  } as const
}

export function fetchArticleFulfilled(article: ArticleModel) {
  return {
    type: 'FEETCH_ARTICLE_FULFILLED',
    payload: {
      article
    }
  } as const
}

export function fetchArticleRejected(error: unknown) {
  return {
    type: 'FETCH_ARTICLE_REJECTED',
    payload: {
      error
    }
  } as const
}

export function unsetArticle() {
  return {
    type: 'UNSET_ARTICLE'
  } as const;
}

export type ArticleActions = ReturnType<typeof fetchArticlePending> | ReturnType<typeof fetchArticleFulfilled> 
  | ReturnType<typeof fetchArticleRejected> | ReturnType<typeof unsetArticle>;

export function fetchArticle(articleId: ArticleModel['id']) {
  return async function (dispatch: Dispatch<StoreObjectActions>) {
    dispatch(fetchArticlePending())
    try {

      const article = await articleService.getArticle(articleId);
      dispatch(fetchArticleFulfilled(article));
    } catch(error) {

      dispatch(fetchArticleRejected(error))
    }
  }
}