import React from 'react';
import { Grid } from '@material-ui/core';

const TodoList: React.FC = ({ children }) => (
  <section>
    <Grid container>{children}</Grid>
  </section>
);

export default TodoList;
