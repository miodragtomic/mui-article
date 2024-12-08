import { Description } from "./Description";
import { Details } from './Details'
import { PricingAndShipping } from "./PricingAndShipping";

export function ArticleDescriptionSection() {
  return (
    <div>
      Article description section
      <Description />
      <Details />
      <PricingAndShipping />
    </div>
  )
}