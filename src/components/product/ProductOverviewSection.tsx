import { ProductThumbnailList } from "./ProductThumbnailList";
import { ProductImage } from "./ProductImage"
import { ProductOverview } from "./ProductOverview";

export function ProductOverviewSection() {
  return (
    <div>
      Product overview section
      <ProductThumbnailList />
      <ProductImage />
      <ProductOverview />
    </div>
  )
}