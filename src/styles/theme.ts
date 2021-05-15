import { createMuiTheme } from "@material-ui/core/styles";

import { breakpoints } from ".";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D7EAF",
      contrastText: "#fff",
    },
    secondary: {
      main: "#cc0000",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
});

export default theme;
