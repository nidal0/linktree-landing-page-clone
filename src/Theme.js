import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#39e09b",
      light: "#FF4F30",
      dark: "#930000",
    },
    secondary: {
      main: "#7551e9",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#BDBDBD",
      light: "#FF4F30",
      dark: "#930000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 280.05,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
