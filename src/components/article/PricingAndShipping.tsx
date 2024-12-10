import Stack from "@mui/material/Stack";
import { ArticleModel } from "../../models/ArticleModel";
import { Card } from "./Card";
import { List, ListItem } from "./List";
import { useMemo } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import Typography from "@mui/material/Typography";
import { currencyNumberFormater } from '../../utils/currency-format-util';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { DotIcon } from "../icons/DotIcon";

export type PricingAndShippingProps = Pick<ArticleModel, 'minimum_order_quantity' | 'transport_costs' | 'currency' | 'delivery_time' | 'price_breaks' | 'unit'>;

export function PricingAndShipping(props: PricingAndShippingProps) {
  const pricingInfoItems = useMemo( () => [
    { title: "Minimum order" , value: props.minimum_order_quantity, suffix: props.unit}, 
    { title: "Shipping", value:  currencyNumberFormater.format(props.transport_costs), suffix: props.currency },
    { title: "Delivery", value: props.delivery_time, suffix: "days" }
  ], [props.minimum_order_quantity, props.transport_costs, props.delivery_time, props.unit, props.currency])

  const priceBreaksItems = useMemo( () => Object.entries(props.price_breaks)
    .map( ([priceBreakKey, priceBreakValue]) => (
      {
        prefix: "ex",
        title: priceBreakKey,
        infix: props.unit,
        value: priceBreakValue,
        suffix: `${props.currency}/${props.unit}`
      }
  )), [props.price_breaks, props.currency, props.unit])

  return (
    <Card title="Pricing and shipping">
      <Stack direction='column' gap={1}>
        <List>
          {
            pricingInfoItems.map( (infoItem, index) => (
              <ListItem 
                key={index}
                icon={<DotIcon />}
                >
                <Typography component="span" color="textDisabled">{infoItem.title}: </Typography>
                <Typography component="span" color="textPrimary">{infoItem.value}</Typography>
                <Typography component="span" color="textPrimary"> {infoItem.suffix}</Typography>
              </ListItem>
            ))
          }
        </List>
        <List 
          title="Price breaks"
          sx={{ mt: 4}}
          >
          {
            priceBreaksItems.map( (priceBreakItem, index) => (
              <ListItem 
                key={index}                
                >
                { index == 0 && <Divider orientation="horizontal" />}
                <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-between'}}>
                  <Typography component="span" color="textPrimary" sx={{ 
                      display: 'inline-flex', 
                      flexBasis: 150, 
                      justifyContent: 'end',
                      mr: 4
                    }}>
                    {`${priceBreakItem.prefix} ${priceBreakItem.title} ${priceBreakItem.infix}`}
                  </Typography>                
                  <Typography component="span" color="textPrimary" sx={{ 
                      ml: 2, 
                      display: 'inline-flex', 
                      flexBasis: 200
                    }}> 
                    {`${priceBreakItem.value} ${priceBreakItem.suffix}`}
                  </Typography>
                </Box>
                <Divider orientation="horizontal" />
              </ListItem>
            ))
          }
        </List>
      </Stack>
    </Card>
  )
}