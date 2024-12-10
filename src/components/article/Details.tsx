import { ArticleModel } from "../../models/ArticleModel";
import { Card } from "./Card";

export type DetailsProps = Pick<ArticleModel, 'features' | 'attachments' | 'keywords'>

export function Details(props: DetailsProps) {
  return (
    <Card title="Details">
      <div>Test content</div>
    </Card>
  ) 
}