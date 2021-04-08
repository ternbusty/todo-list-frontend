import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    marginTop: "20px",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 540px) 60px",
  },
  input: {
    width: "100%",
    [`& fieldset`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
  submit_button: {
    padding: "6px 10px",
    minWidth: "50px",
    boxShadow: "none",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
  editing_form: {
    marginTop: "14px",
  },
  editing_input: {
    [`& input`]: {
      padding: "20.5px 14px",
    },
  },
});

export default useStyles;
