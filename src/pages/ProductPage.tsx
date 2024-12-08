import { useParams } from "react-router"

export function ProductPage() {
  const { productId } = useParams();

  return (
    <div>Product Page ({ productId })</div>
  )
}