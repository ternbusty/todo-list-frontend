import { makeStyles } from "@material-ui/core/styles";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  content: {
    margin: "auto",
  },
  button: {
    padding: "2px",
  },
  menu: {
    maxHeight: ITEM_HEIGHT * 4.5,
  },
  menu_item: {
    width: "100px",
  },
});

export default useStyles;
