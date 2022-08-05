

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopBar from './components/top-bar/TopBar';

const theme=createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#610C63',
      light:"#EE81B3"
    },
    secondary: {
      main: '#810955',
    },
    text: {
      primary: '#610C63',
      secondary: '#810955',
    },
  },
  typography: {
    fontFamily: 'Rubik',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2560,
    },
  },
})

console.log(theme)
function App() {
  return (
    <ThemeProvider theme={theme}>
  
      <TopBar/>
    </ThemeProvider>
   
  );
}

export default App;
