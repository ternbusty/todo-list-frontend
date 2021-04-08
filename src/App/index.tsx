import { FC } from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./styles";

import { theme } from "../utils";
import { Form, List } from "../components";
import { selectTodos } from "../store/selectors";

const App: FC = () => {
  const styles = useStyles();
  const todos = useSelector(selectTodos);

  return (
    <Container className={styles.container}>
      <ThemeProvider theme={theme}>
        <div className={styles.logo_and_title}>
          <img
            alt="logo"
            className={styles.logo}
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
          <Typography variant="h1" color="primary" className={styles.title}>
            To Do List
          </Typography>
        </div>
        <Form />
        {todos.length < 1 ? (
          <Typography color="primary" className={styles.no_tasks}>
            No Tasks
          </Typography>
        ) : (
          <List />
        )}
      </ThemeProvider>
    </Container>
  );
};

export default App;
