import { useParams } from "react-router";
import { ArticleOverviewSection } from "../components/article/ArticleOverviewSection";
import { ArticleDescriptionSection } from "../components/article/ArticleDescriptionSection";
import { useEffect, useState } from "react";
import { articleService } from "../services/articleService";
import { ArticleModel } from "../models/ArticleModel";
import React from "react";
import Box from "@mui/material/Box";

export function ArticlePage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleModel | null>(null)

  useEffect( () => {
    articleService.getArticle(Number(articleId))
      .then( setArticle )        

  }, [articleId]);

  return (
    <React.Fragment>
    { article != null && (
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>Article Page ({ articleId })
        <ArticleOverviewSection  images={article?.images ?? []} />
        <ArticleDescriptionSection />    
      </Box>)
    }    
    </React.Fragment>
  )
}