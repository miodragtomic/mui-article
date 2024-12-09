import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        sx: {
          borderBottom: "solid 2px",
          borderColor: "rgb(167, 167, 167)"
        }
      }
    },  
  },
  palette: {    
    primary: {
      main: "rgb(87, 127, 149)"      
    },
    secondary: {
      main: "rgb(219, 77, 64)",
    },
    text: {      
      primary: "rgb(51, 51, 51)",
      secondary: "rgb(167, 167, 167)",      
      
      /*primary: "rgb(167, 167, 167)",      
      secondary: "rgb(51, 51, 51)"*/
      /*secondary: "rgb(219, 77, 64)",      */
      
    },
    info: {
      main: "rgb(167, 167, 167)"
    },
    error: {
      main: "rgb(219, 77, 64)"
    }
  },
  shape: {
    borderRadius: 0
  },
  /*
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    
    error: {
      main: red.A400,
    },
  },
  */
});

export default theme;