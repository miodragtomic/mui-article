import { useParams } from "react-router";
import { ArticleOverviewSection } from "../components/article/ArticleOverviewSection";
import { ArticleDescriptionSection } from "../components/article/ArticleDescriptionSection";

export function ArticlePage() {
  const { articleId } = useParams();

  return (
    <div>Article Page ({ articleId })
      <ArticleOverviewSection />
      <ArticleDescriptionSection />    
    </div>
  )
}