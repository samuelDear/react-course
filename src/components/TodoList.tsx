import React from 'react';
import { Grid, Box } from '@material-ui/core';

const TodoList: React.FC = ({ children }) => (
  <Box my={4}>
    <Grid container>{children}</Grid>
  </Box>
);

export default TodoList;
