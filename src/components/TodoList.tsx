import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useStyleTodoList } from 'styles';

const TodoList: React.FC = ({ children }) => {
  const classes = useStyleTodoList();

  return (
    <Box my={4} display="flex" className={classes.boxList}>
      <Grid container item xs={12}>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      </Grid>
    </Box>
  );
};

export default TodoList;
