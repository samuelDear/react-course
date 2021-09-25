import React from 'react';
import { Button } from '@material-ui/core';
import { useStyleCreateTodoButton } from 'styles';

type createTodoButtonProps = {
  event: () => void;
};

const CreateTodoButton: React.FC<createTodoButtonProps> = ({ event, ...props }) => {
  const classes = useStyleCreateTodoButton();

  return (
    <Button
      onClick={event}
      className={classes.AddTasksButton}
      type="button"
      variant="contained"
      {...props}
    >
      Add Task
    </Button>
  );
};

export default CreateTodoButton;
