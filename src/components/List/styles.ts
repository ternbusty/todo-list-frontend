import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    marginTop: "10px",
  },
  expand_completed_button: {
    display: "flex",
    cursor: "pointer",
    userSelect: "none",
    alignItems: "center",
    margin: "24px 0 0 6px",
  },
  expand_icon: {
    transition: "0.3s",
  },
  no_completed_tasks: {
    marginTop: "16px",
    textAlign: "center",
  },
});

export default useStyles;
