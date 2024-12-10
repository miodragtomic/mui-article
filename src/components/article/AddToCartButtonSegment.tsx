import { Button, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { AddIcon } from "../icons/AddIcon";
import { ArticleDto } from "../../api/dtos/ArticleDto";
import { useState } from "react";
import { addToCart } from "../../actions/cartActions";
import { useDispatch } from "react-redux";
import { StoreActions } from "../../store";
import { Dispatch } from "redux";

export type AddToCartButtonSegmentProps = Pick<ArticleDto, 'id' | 'unit' | 'minimum_order_quantity' | 'price'>

export function AddToCartButtonSegment(props: AddToCartButtonSegmentProps) {
  const { id, unit, minimum_order_quantity } = props;
  const [orderQuantity, setOrderQuantity] = useState<number>(minimum_order_quantity);

  const dispatch = useDispatch<Dispatch<StoreActions>>();

  function onAddArticle(articleId: number, count: number, pricePerOneCount: number) {    
    dispatch(addToCart(articleId, Number(count), pricePerOneCount))
  }

  return (
    <Stack direction="row" useFlexGap={true} spacing={2.5}>      
      <Stack direction="row" useFlexGap={true} spacing={1}>
        <TextField           
          variant="outlined" 
          size="small" 
          sx={{flexGrow: 0, width: 80, justifySelf: 'center', alignSelf: 'center'}} 
          value={orderQuantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            try {
              setOrderQuantity(Number(event.target.value));
            }catch(error) {
              console.error(error)
            }            
          }}          
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
        onClick={() => onAddArticle(id, orderQuantity, props.price)}
      > 
        Add to cart
        </Button>
        </Stack>
    
  )
}