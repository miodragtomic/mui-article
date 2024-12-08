import { ArticleThumbnailList } from "./ArticleThumbnailList";
import { ArticleImage } from "./ArticleImage"
import { ArticleOverview } from "./ArticleOverview";

export function ArticleOverviewSection() {
  return (
    <div>
      Article overview section
      <ArticleThumbnailList />
      <ArticleImage />
      <ArticleOverview />
    </div>
  )
}