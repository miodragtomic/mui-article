import { ArticleModel } from "../../models/ArticleModel";
import { Card } from "./Card";

export type PricingAndShippingProps = Pick<ArticleModel, 'minimum_order_quantity' | 'transport_costs' | 'currency' | 'delivery_time' | 'price_breaks'>;

export function PricingAndShipping(props: PricingAndShippingProps) {
  return (
    <Card title="Pricing and shipping">
      <div>Pricing and shipping content</div>
    </Card>
  )
}