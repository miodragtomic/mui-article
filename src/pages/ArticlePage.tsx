import { useParams } from "react-router";
import { ArticleOverviewSection } from "../components/article/ArticleOverviewSection";
import { ArticleDescriptionSection } from "../components/article/ArticleDescriptionSection";

export function ArticlePage() {
  const { ArticleId } = useParams();

  return (
    <div>Article Page ({ ArticleId })
      <ArticleOverviewSection />
      <ArticleDescriptionSection />    
    </div>
  )
}