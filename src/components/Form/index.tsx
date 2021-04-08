import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import { Box, Button, TextField, FormControl } from "@material-ui/core";

import useStyles from "./styles";

import {
  TodoInterface,
  FormEventInterface,
  InputEventInterface,
} from "../../types";
import { addTodo, setTodoText } from "../../store/actions";
import { emptyTodo, processInputValue } from "../../utils";

interface Props {
  editing?: boolean;
  todo?: TodoInterface;
  setEditing?: Dispatch<SetStateAction<boolean>>;
}

const defaultProps: Props = {
  editing: false,
  todo: emptyTodo,
};

const Form: FC<Props> = ({ todo, editing, setEditing }) => {
  const [inputValue, setInputValue] = useState("");

  const styles = useStyles();
  const dispatch = useDispatch();

  const buttonIcon = editing ? <UpdateIcon /> : <AddIcon />;
  const buttonName = editing ? "Update To Do" : "Add To Do";

  const handleInputChange = (event: InputEventInterface) => {
    const targetValue = event.target.value;

    setInputValue(
      targetValue.length < 700 ? targetValue : targetValue.slice(0, 700)
    );
  };

  const handleSubmit = (event: FormEventInterface) => {
    event.preventDefault();

    if (!processInputValue(inputValue)) {
      alert("Input is empty");
      return;
    }

    if (editing) {
      dispatch(setTodoText(todo || emptyTodo, processInputValue(inputValue)));

      setEditing && setEditing(false);
    } else {
      const todo = {
        id: nanoid(),
        completed: false,
        text: processInputValue(inputValue),
      };

      dispatch(addTodo(todo));
      setInputValue("");
    }
  };

  useEffect(() => {
    if (editing) {
      setInputValue((todo || emptyTodo).text);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={editing ? styles.editing_form : styles.form}
    >
      <FormControl variant="outlined">
        <Box className={styles.content}>
          <TextField
            variant="outlined"
            value={inputValue}
            autoFocus={editing}
            onChange={handleInputChange}
            label={!editing && "To Do Text"}
            placeholder={editing ? "To Do Text" : ""}
            className={`${styles.input} ${editing && styles.editing_input}  `}
          />
          <Button
            type="submit"
            color="primary"
            name={buttonName}
            variant="contained"
            className={styles.submit_button}
          >
            {buttonIcon}
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

Form.defaultProps = defaultProps;

export default Form;
