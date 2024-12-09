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

export interface AppBarProps extends ElevationScrollProps {
  title: string;
  cartItemsCount: number
}

interface ElevationScrollProps {
  

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function ElevateAppBar(props: AppBarProps) {
  const { 
    title = "Headr title",
    cartItemsCount = 4, 
    ...restProps} = props ?? {};

  const cartMenuIconId = "fact"
  function handleCartIconClick() {

  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...restProps}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" color='secondary'>
              { title }
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">                
                  <SvgIcon color="info">
                    <FavoriteIcon />
                  </SvgIcon>                
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >               
                <SvgIcon color="info">
                  <FactSoftIcon />
                </SvgIcon>               
              </IconButton>
            </Box>
            <Divider               
              sx={{
                borderWidth: 1,
                borderColor: theme => theme.palette.info
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
                color="info"
              >
                <Badge badgeContent={cartItemsCount} color="error">
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
