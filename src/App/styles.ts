import { makeStyles } from "@material-ui/core/styles";

import { theme, breakpoints } from "../styles";

const useStyles = makeStyles({
  container: {
    padding: "70px 0 110px",
    maxWidth: "600px",
    [theme.breakpoints.down(breakpoints.md)]: {
      padding: "60px 16px 100px",
      maxWidth: "unset",
    },
    [theme.breakpoints.down(breakpoints.sm)]: {
      padding: "50px 6px 90px",
    },
  },
  logo_and_title: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    marginRight: "12px",
    [theme.breakpoints.down(breakpoints.sm)]: {
      width: "48px",
    },
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    [theme.breakpoints.down(breakpoints.sm)]: {
      fontSize: "44px",
    },
  },
  no_tasks: {
    marginTop: "30px",
    textAlign: "center",
  },
});

export default useStyles;
