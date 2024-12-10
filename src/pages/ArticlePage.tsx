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
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <ArticleOverviewSection  
          id={article.id}
          images={article?.images ?? []} 
          
          description_short={article.description_short}
          supplier_name={article.supplier_name}
          supplier_link={article.supplier_link}
          stars={article.stars}
          price={article.price}
          transport_costs={article.transport_costs}
          currency={article.currency}
          vat_percent={article.vat_percent}
          unit={article.unit}
          minimum_order_quantity={article.minimum_order_quantity}          
        />
        <ArticleDescriptionSection 
          description_long={article.description_long}
          features={article.features}
          attachments={article.attachments}
          keywords={article.keywords}
          minimum_order_quantity={article.minimum_order_quantity}
          transport_costs={article.transport_costs}
          currency={article.currency}
          delivery_time={article.delivery_time}
          price_breaks={article.price_breaks}
        />    
      </Box>)
    }    
    </React.Fragment>
  )
}