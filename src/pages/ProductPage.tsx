import { useParams } from "react-router";
import { ProductOverviewSection } from "../components/product/ProductOverviewSection";
import { ProductDescriptionSection } from "../components/product/ProductDescriptionSection";

export function ProductPage() {
  const { productId } = useParams();

  return (
    <div>Product Page ({ productId })
      <ProductOverviewSection />
      <ProductDescriptionSection />    
    </div>
  )
}