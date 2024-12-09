import { Button, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { AddIcon } from "../icons/AddIcon";
import { ArticleDto } from "../../api/dtos/ArticleDto";
import { useState } from "react";

export type AddToCartButtonSegmentProps = Pick<ArticleDto, 'id' | 'unit' | 'minimum_order_quantity'>

export function AddToCartButtonSegment(props: AddToCartButtonSegmentProps) {
  const { id, unit, minimum_order_quantity } = props;
  const [orderQuantity, setOrderQuantity] = useState<string>();

  return (
    <Stack direction="row" useFlexGap={true} spacing={2.5}>      
      <Stack direction="row" useFlexGap={true} spacing={1}>
        <TextField           
          variant="outlined" 
          size="small" 
          sx={{flexGrow: 0, width: 80, justifySelf: 'center', alignSelf: 'center'}} 
          value={orderQuantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setOrderQuantity(event.target.value);
          }}
          defaultValue={minimum_order_quantity}
          slotProps={{htmlInput: {
            style: { 
              textAlign: 'end'
            }
          }}}
        />
        <Typography component="div" color="textPrimary" sx={{ justifyContent: 'center', alignItems: 'center', display: "flex"}}>
        { unit }
        </Typography>
      </Stack>
      <Button 
        size="medium" 
        variant="contained" 
        color="secondary"
        startIcon={<SvgIcon fontSize="large"><AddIcon /></SvgIcon>}
        sx={{ textTransform: 'unset', flexGrow: 0, justifySelf: 'center', alignSelf: 'center'}}
      > 
        Add to cart
        </Button>
        </Stack>
    
  )
}