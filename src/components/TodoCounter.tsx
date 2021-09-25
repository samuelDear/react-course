import React from 'react';
import { useStyleTodoCounter } from 'styles';

type TodoCounterProps = {
  completed?: number;
  total?: number;
};

const TodoCounter: React.FC<TodoCounterProps> = ({ completed = 0, total = 0 }) => {
  const classes = useStyleTodoCounter();

  return (
    <>
      <h1 className={classes.title}>Your Tasks</h1>
      <h2 className={classes.subtitle}>
        You have completed {completed} of {total} tasks
      </h2>
    </>
  );
};

export default TodoCounter;
