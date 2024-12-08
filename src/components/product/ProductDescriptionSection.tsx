import { Description } from "./Description";
import { Details } from './/Details'
import { PricingAndShipping } from "./PricingAndShipping";

export function ProductDescriptionSection() {
  return (
    <div>
      Product description section
      <Description />
      <Details />
      <PricingAndShipping />
    </div>
  )
}