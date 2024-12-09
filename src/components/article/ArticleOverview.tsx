import { Box, Link, Rating, Stack, Typography } from "@mui/material";
import { ArticleModel } from "../../models/ArticleModel";
import { useMemo, useState } from "react";
import { AddToCartButtonSegment, AddToCartButtonSegmentProps } from "./AddToCartButtonSegment";

export type ArticleOverviewProps = Pick<
  ArticleModel, 
  'description_short' | 'supplier_name' | 'supplier_link' | 'stars' | 'price' | 'transport_costs' |
  'currency' | 'vat_percent' | 'unit'> & AddToCartButtonSegmentProps;

const numberFormater = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

export function ArticleOverview(props: ArticleOverviewProps) {
  const {
    id, 
    description_short, 
    supplier_name, 
    supplier_link,
    stars,
    price,
    transport_costs,
    currency,
    vat_percent,
    unit,
    minimum_order_quantity
  } = props;

  const [ratingValue, setRatingValue] = useState<number>(stars);

  const formatedPrice = useMemo( () => numberFormater.format(price), [price]);
  const formatedTransportCosts = useMemo( () => numberFormater.format(transport_costs), [transport_costs]);

  return (
    <Stack sx={{ height: "100%"}} direction="column" justifyContent="space-between">
      <div>
        <Typography component="p" color="textPrimary">{ description_short }</Typography>
        <Box component="div" sx={{mt: 0.75}}>
          <Typography component="span" color="textSecondary">by</Typography><Link fontWeight={450} sx={{ ml: 0.5 }} underline="hover" href={supplier_link}>{ supplier_name }</Link>
        </Box>      
        <Rating sx={{ mt: 1.5, mb: 3.5, ml: -0.5}} defaultValue={ratingValue} size="medium" />
        <div>
          <div>
            <Typography component="span" color="textPrimary">{ `${formatedPrice} ${currency}` }</Typography>        
            <Typography component="span" color="textSecondary" sx={{ ml: 1.5}}>+{` ${formatedTransportCosts} ${currency}`} shipping</Typography>
          </div>
            <Typography component="div" color="textSecondary">all prices incl. {`${vat_percent}`}% taxes</Typography>
        </div>
      </div>
      <AddToCartButtonSegment
        id={id}
        minimum_order_quantity={minimum_order_quantity}
        unit={unit}              
      />
    </Stack>
  )
}