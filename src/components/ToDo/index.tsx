import { FC, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { Card, Typography, Checkbox } from "@material-ui/core";

import useStyles from "./styles";

import { Form, ThreeDotsMenu } from "..";

import { emptyTodo } from "../../utils";
import { TodoInterface } from "../../types";
import { setTodoCompleted } from "../../store/actions";

interface Props {
  todo: TodoInterface;
}

const defaultProps: Props = {
  todo: { ...emptyTodo, id: nanoid() },
};

const ToDo: FC<Props> = ({ todo }) => {
  const [editing, setEditing] = useState<boolean>(false);

  const styles = useStyles();
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(setTodoCompleted(todo, !todo.completed));
  };

  return editing ? (
    <Form editing todo={todo} setEditing={setEditing} />
  ) : (
    <Card variant="outlined" className={styles.card}>
      <Checkbox
        color="primary"
        className={styles.checkbox}
        onChange={handleCheckboxChange}
        defaultChecked={todo.completed}
      />
      <Typography className={styles.text}>
        {todo.completed ? <del>{todo.text}</del> : todo.text}
      </Typography>
      <ThreeDotsMenu todo={todo} setEditing={setEditing} />
    </Card>
  );
};

ToDo.defaultProps = defaultProps;

export default ToDo;
