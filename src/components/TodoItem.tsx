import React from 'react';
import { Checkbox, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoItemProps } from 'types';
import { useStyleTodoItem } from 'styles';

const TodoItem: React.FC<TodoItemProps> = ({
  completed,
  completeTasks,
  removeTasks,
  text = '',
}) => {
  const classes = useStyleTodoItem();
  return (
    <Grid container item xs={12} className={classes.tasksBox}>
      <Grid container item xs={2}>
        <Checkbox checked={completed} onChange={completeTasks} />
      </Grid>
      <Grid container item xs={8} justifyContent="center">
        <p className={`${classes.contentText} ${completed && classes.completedTasks}`}>{text}</p>
      </Grid>
      <Grid container item xs={2} justifyContent="flex-end">
        <IconButton aria-label="delete" size="small" onClick={removeTasks}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
