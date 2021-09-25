import React from 'react';
import { useStyleTodoCounter } from 'styles';

const TodoCounter: React.FC = () => {
  const classes = useStyleTodoCounter();

  return (
    <>
      <h1 className={classes.title}>Your Tasks</h1>
      <h2 className={classes.subtitle}>You have completed 2 of 3 tasks</h2>
    </>
  );
};

export default TodoCounter;
