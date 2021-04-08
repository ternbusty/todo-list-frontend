import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import useStyles from "./styles";

import { ToDo } from "..";
import { selectTodos } from "../../store/selectors";

const List: FC = () => {
  const [showingCompleted, setShowingCompleted] = useState<boolean>(true);
  const todos = useSelector(selectTodos);

  const styles = useStyles();

  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <Grid container spacing={1} className={styles.list}>
        {incompleteTodos.map((todo) => (
          <Grid item xs={12} key={todo.id}>
            <ToDo todo={todo} />
          </Grid>
        ))}
        <div
          role="button"
          className={styles.expand_completed_button}
          onClick={() => setShowingCompleted((state) => !state)}
        >
          <Typography color="primary">Completed</Typography>
          <ExpandLessIcon
            color="primary"
            className={styles.expand_icon}
            style={!showingCompleted ? { transform: "rotate(-180deg)" } : {}}
          />
        </div>
        {showingCompleted &&
          completedTodos.map((todo) => (
            <Grid item xs={12} key={todo.id}>
              <ToDo todo={todo} />
            </Grid>
          ))}
      </Grid>
      {showingCompleted && completedTodos.length < 1 && (
        <Typography color="primary" className={styles.no_completed_tasks}>
          No completed tasks
        </Typography>
      )}
    </div>
  );
};

export default List;
