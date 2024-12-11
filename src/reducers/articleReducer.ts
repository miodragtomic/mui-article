import { ArticleActions, fetchArticleFulfilled, fetchArticleRejected } from "../actions/articleActions";
import { ArticleModel } from "../models/ArticleModel";

export type ArticleState = { data: ArticleModel | null, loading: boolean; error?: unknown }
const DEFAULT_ARTICLE_STATE: ArticleState = {
  data: null,
  loading: false,  
}

export function articleReducer(state: ArticleState = DEFAULT_ARTICLE_STATE, action: ArticleActions): ArticleState {  
  switch(action.type) {    
    case 'FETCH_ARTICLE_PENDING': {
      return {
        data: null,
        loading: true
      }
    }
    
    case 'FEETCH_ARTICLE_FULFILLED': {
      const { payload } = action as ReturnType<typeof fetchArticleFulfilled>;
      return {
        ...state,
        data: {
          ...payload.article
        },
        loading: false
      }
    }

    case 'FETCH_ARTICLE_REJECTED': {
      const { payload } = action as ReturnType<typeof fetchArticleRejected>;
      return {
        ...state,
        data: null,
        loading: false,
        error: payload.error
      }
    }

    case 'UNSET_ARTICLE': {
      return {        
        ...state,
        data: null,        
      }
    }

    default: {
      return state;
    }
  }
}