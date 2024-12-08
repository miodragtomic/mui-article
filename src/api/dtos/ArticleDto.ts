export interface ArticleDto {
  id: number
  title: string
  description_short: string
  description_long: string
  supplier_name: string
  supplier_link: string
  stars: number
  price: number
  price_breaks: PriceBreaks
  currency: string
  transport_costs: number
  vat_percent: number
  images: string[]
  minimum_order_quantity: number
  delivery_time: number
  unit: string
  features: Features
  attachments: Attachment[]
  keywords: string[]
}

export interface PriceBreaks {
  "20": number
  "50": number
  "100": number
}

export interface Features {
  "Feature 1": string
  "Feature 2": string
  "Feature 3": string
}

export interface Attachment {
  file_label: string
  file_size: number
  file_name: string
  file_link: string
}

