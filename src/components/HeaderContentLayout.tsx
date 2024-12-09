import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import AppBar from './AppBar';

export function HeaderContentLayout() {  
  return (
    <Container disableGutters={true} maxWidth={false}>
    <AppBar title='Header title' cartItemsCount={5} />
    { /* <TestScrollContent /> */}
      <Box sx={{mt: 2, mx: 1}}>        
        <Outlet />
      </Box>      
    </Container>
  )
}