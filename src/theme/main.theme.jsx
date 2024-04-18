import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#265244',
    },
    secondary: {
      main: '#388454',
    },
    error: {
      main: red.A400,
    },
    whatsapp: {
      main: green.A700,
      hover: green.A200,
    },
  },
});
