import Box from "@mui/material/Box";
import { Description, DescriptionProps } from "./Description";
import { Details, DetailsProps } from './Details'
import { PricingAndShipping, PricingAndShippingProps } from "./PricingAndShipping";
import Grid, { Grid2Props } from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material';

export type ArticleDescriptionProps = DescriptionProps & DetailsProps & PricingAndShippingProps;

export function ArticleDescriptionSection(props: ArticleDescriptionProps) {
  const theme = useTheme();
  const lgAndDown = useMediaQuery(theme.breakpoints.down('lg'));
  const gridItemSize: Grid2Props['size'] = { xs: 12, sm: 8, lg: 4, xl: 4};

  return (
    <Box sx={{ backgroundColor: theme => theme.palette.secondary.light, padding: 4, mt: 4}}>      
      <Grid container gap={2} sx={lgAndDown ? { justifyContent: 'center'} : {}}>
        <Grid size={{xs: 8}}>
          <Description description_long={props.description_long} />
        </Grid>
        <Grid size={{...gridItemSize}}>
          <Details 
            features={props.features}
            attachments={props.attachments}
            keywords={props.keywords}
          />
        </Grid>
        <Grid size={{...gridItemSize}}>
          <PricingAndShipping 
            minimum_order_quantity={props.minimum_order_quantity}
            transport_costs={props.transport_costs}
            delivery_time={props.delivery_time}
            currency={props.currency}
            price_breaks={props.price_breaks}
            unit={props.unit}
          />
        </Grid>
      </Grid>
    </Box>
  )
}