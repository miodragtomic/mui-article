import { useEffect, useState } from "react";
import { ArticleSimpleDto } from "../api/dtos/ArticleDto";
import { ArticleList } from "../components/article-list/ArticleList";
import { articleService } from "../services/articleService";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { StoreActions } from "../store";
import { Dispatch } from "redux";
import { unsetArticle } from "../actions/articleActions";

export function ArticleListPage() {
  const [articleList, setArticleList] = useState<ArticleSimpleDto[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<StoreActions>>()

  useEffect(() => {
    dispatch(unsetArticle())
    articleService.getArticleList()
      .then( setArticleList )
  },[])

  function onArticleImageClick(articleId: number) {
    navigate(`./${articleId}`);
  }

  return (
    <ArticleList 
      articleList={articleList}    
      onArticleImageClick={onArticleImageClick}
    />
  )
}