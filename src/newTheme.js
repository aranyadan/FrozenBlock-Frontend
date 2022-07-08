//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#000',
    },
    background: {
      default: '#121212',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      light: '#00E0FF',
      main: '#2F9DFF',
      dark: '#0036FF',
      contrastText: '#000',
    },
    discord :{
      light: '#6043f7',
      main: '#6043f7',
    },
    secondary: {
      light: '#6043f7',
      main: '#6043f7',
      dark: '#757ce8',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    color: '#000000',
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
});

export default newTheme;
