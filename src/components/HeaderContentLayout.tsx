import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import AppBar from './AppBar';
import temp from '../assets/react.svg'

export function HeaderContentLayout() {
  console.log("Temp", temp)
  return (
    <Container disableGutters={true} maxWidth={false}>
    <AppBar title='Header title' cartItemsCount={5} />
    { /* <TestScrollContent /> */}
      <Box sx={{mt: 2, mx: 1}}>
        Header Content Layout
        <Outlet />
      </Box>      
    </Container>
  )
}