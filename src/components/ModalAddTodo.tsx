import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  Button,
  TextField,
} from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useStyleModalAddTodo } from 'styles';

type ModalProps = {
  open: boolean;
  closeEvent: () => void;
  // eslint-disable-next-line no-unused-vars
  addTask: (txt: string) => void;
};

const ModalAddTodo: React.FC<ModalProps> = ({ open, closeEvent, addTask, ...props }) => {
  const [newTask, setNewTask] = useState('');

  const classes = useStyleModalAddTodo();

  const saveTask = (): void => {
    addTask(newTask);
    setNewTask('');
    closeEvent();
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason === 'backdropClick') {
          setNewTask('');
          closeEvent();
        }
      }}
      {...props}
    >
      <DialogTitle className={classes.titleModal}>Add Task</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.msgModal}>Add your new task</DialogContentText>
        <form onSubmit={saveTask}>
          <TextField
            placeholder="Task..."
            value={newTask}
            variant="outlined"
            type="text"
            onChange={({ target: { value } }) => setNewTask(value)}
            {...props}
            InputProps={{
              className: classes.input,
              classes: {
                root: classes.cssOutlinedInput,
                notchedOutline: classes.notchedOutline,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <AssignmentTurnedInIcon />
                </InputAdornment>
              ),
            }}
          />
          <Grid container item xs={12} justifyContent="space-around" className={classes.buttonsBox}>
            <Grid item container sm={5} xs={12} justifyContent="center">
              <Button
                type="button"
                className={`${classes.cancelBtn} ${classes.btnBox}`}
                fullWidth
                onClick={() => {
                  setNewTask('');
                  closeEvent();
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item container sm={5} xs={12} justifyContent="center">
              <Button
                type="submit"
                disabled={newTask === ''}
                className={`${classes.acceptBtn} ${classes.btnBox}`}
                onClick={saveTask}
                fullWidth
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddTodo;
