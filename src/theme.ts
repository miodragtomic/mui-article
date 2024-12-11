import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {        
        sx: {
          bgcolor: 'white',
          borderBottom: "solid 2px",
          //borderColor: "rgb(167, 167, 167)"
          borderColor: "rgb(233, 233, 233)"
        }
      }
    },  
  },
  palette: {    
    primary: {
      light: "rgb(206, 212, 219)",
      main: "rgb(87, 127, 149)"      
    },
    secondary: {      
      light: "rgb(239, 239, 239)", //bg_detail
      dark: "rgb(220, 75, 63)", 
      main: "rgb(219, 77, 64)",  //badge
    },
    text: {            
      primary: "rgb(51, 51, 51)",
      secondary: "rgb(220, 75, 63)",
      disabled: "rgb(122, 122, 122)",      
    },
    info: {      
      main: "rgb(233, 233, 233)", //appbar border
      light: "rgb(236, 236, 236)", // image border
      dark: "rgb(167, 167, 167)", // appbar icons                  
    },
    error: {
      main: "rgb(219, 77, 64)" //badge
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    h6: {
      fontSize: 18
    }
  }  
});

export default theme;