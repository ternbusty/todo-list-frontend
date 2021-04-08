import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "grid",
    marginTop: "14px",
    minHeight: "60px",
    padding: "14px 3px",
    boxSizing: "border-box",
    gridTemplateColumns: "50px 1fr 50px",
  },
  text: {
    margin: "3px 0",
    wordBreak: "break-word",
  },
  checkbox: {
    padding: "2px",
    margin: "auto",
    maxHeight: "25px",
  },
});

export default useStyles;
