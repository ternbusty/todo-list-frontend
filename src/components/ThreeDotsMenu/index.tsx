import { FC, useState, Dispatch, SetStateAction, MouseEvent } from "react";
import { useDispatch } from "react-redux";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Menu, MenuItem, IconButton, Typography } from "@material-ui/core";

import useStyles from "./styles";

import { emptyTodo } from "../../utils";
import { TodoInterface } from "../../types";
import { deleteTodo } from "../../store/actions";

interface Props {
  todo: TodoInterface;
  setEditing: Dispatch<SetStateAction<boolean>>;
}
const defaultProps: Props = {
  todo: emptyTodo,
  setEditing: () => undefined,
};

const ThreeDotsMenu: FC<Props> = ({ todo, setEditing }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const styles = useStyles();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditing(true);
    handleClose();
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo));
    handleClose();
  };

  return (
    <div className={styles.content}>
      <IconButton
        color="primary"
        aria-label="more"
        aria-haspopup="true"
        onClick={handleClick}
        aria-controls="long-menu"
        className={styles.button}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={open}
        keepMounted
        id="long-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        className={styles.menu}
      >
        <MenuItem onClick={handleEdit} className={styles.menu_item}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} className={styles.menu_item}>
          <Typography color="secondary">Delete</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

ThreeDotsMenu.defaultProps = defaultProps;

export default ThreeDotsMenu;
