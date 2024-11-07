import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';

export const colors = {
  RED: red[500]
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.RED,
    },
    secondary: {
      main: '#ffff'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'outlined',
          },
          style: {
            backgroundColor: '#fff',
            border: `1px solid ${colors.RED}`,
            color: 'black',
            borderRadius: 'unset',
            '&:hover': {
              border: `1px solid black`,
              color: colors.RED,
            },
          }
        }
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'button'
          },
          style: {
            color: 'black',
            borderRadius: 'unset',
            fontWeight: 300,
            '&:hover': {
              color: colors.RED,
            },
          }
        }
      ]
    }
  }
});