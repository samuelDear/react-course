import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { useStyleTodoList } from 'styles';

const TodoList: React.FC = ({ children }) => {
  const classes = useStyleTodoList();
  return (
    <Box my={4} display="flex" className={classes.boxList}>
      <Grid container xs={12}>
        {children}
      </Grid>
    </Box>
  );
};

export default TodoList;
