import { useEffect, useState } from "react";
import { ArticleSimpleDto } from "../api/dtos/ArticleDto";
import { ArticleList } from "../components/article-list/ArticleList";
import { articleService } from "../services/articleService";
import { useNavigate } from "react-router";

export function ArticleListPage() {
  const [articleList, setArticleList] = useState<ArticleSimpleDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
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