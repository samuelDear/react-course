import React from 'react';
import { Button } from '@material-ui/core';
import { useStyleCreateTodoButton } from 'styles';

const CreateTodoButton: React.FC = () => {
  const classes = useStyleCreateTodoButton();

  return (
    <Button className={classes.AddTasksButton} type="button" variant="contained">
      Add Task
    </Button>
  );
};

export default CreateTodoButton;
