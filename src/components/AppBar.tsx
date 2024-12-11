import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { IconButton, Badge, SvgIcon } from '@mui/material';
import { FactSoftIcon } from './icons/FactSoftIcon';
import { FavoriteIcon } from './icons/FavoriteIcon';
import { CartIcon } from './icons/CartIcon';
import { useEffect } from 'react';
import { fetchCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartModel } from '../models/CartModel';
import { Dispatch } from 'redux';
import { StoreActions, StoreType } from '../store';
import { ArticleModel } from '../models/ArticleModel';

export interface AppBarProps extends ElevationScrollProps {
  title: string;
  cartItemsCount: number
}

interface ElevationScrollProps {  
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const DEFAULT_HEADER_TITLE = "List of articles"

export default function ElevateAppBar(props: AppBarProps) {
  const { 
    title = "Headr title",
    cartItemsCount = 4, 
    ...restProps} = props ?? {};

  const cartState = useSelector<StoreType, CartModel>( store => store.cart.data)
  const articleTitle = useSelector<StoreType, ArticleModel['title'] | undefined>(store => store.article.data?.title)
  const dispatch = useDispatch<Dispatch<StoreActions>>();

  useEffect( () => {
    dispatch(fetchCart())
  },[]);
  
  const cartMenuIconId = "fact"
  function handleCartIconClick() {
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...restProps}>
        <AppBar>
          <Toolbar>
            <Typography sx={{px: 2}} variant="h6" component="div" color='secondary'>
              { articleTitle ?? DEFAULT_HEADER_TITLE }
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" >                
                  <SvgIcon sx={{ color : theme => theme.palette.info.dark}}>
                    <FavoriteIcon />
                  </SvgIcon>                
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >               
                <SvgIcon sx={{ color: theme => theme.palette.info.dark}}>
                  <FactSoftIcon />
                </SvgIcon>               
              </IconButton>
            </Box>
            <Divider               
              sx={{
                borderWidth: 1,
                borderColor: theme => theme.palette.info.light
              }}
              orientation="vertical" 
              variant="fullWidth" 
              flexItem 
            />
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={cartMenuIconId}
                aria-haspopup="true"
                onClick={handleCartIconClick}
                sx={{ color: theme => theme.palette.info.dark}}
              >
                <Badge badgeContent={cartState.items} color="error">
                  <SvgIcon>
                    <CartIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Box>          
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
