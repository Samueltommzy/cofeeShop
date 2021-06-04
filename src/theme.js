//to override styles
import  { createMuiTheme } from '@material-ui/core/styles';
import {purple,green, orange, blue} from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue
  },
  status: {
    danger: orange
  }
})