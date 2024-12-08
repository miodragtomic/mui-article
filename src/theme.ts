import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        sx: {
          borderBottom: "solid 2px rgb(167, 167, 167)"
        }
      }
    }
  },
  palette: {
    text: {      
      primary: "rgb(167, 167, 167)",
      secondary: "rgb(219, 77, 64)",
    },
    error: {
      main: "rgb(219, 77, 64)"
    }
  }
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