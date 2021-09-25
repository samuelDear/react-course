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
  // eslint-disable-next-line no-unused-vars
  taskExist: (txt: string) => boolean;
};

const ModalAddTodo: React.FC<ModalProps> = ({ open, closeEvent, addTask, taskExist, ...props }) => {
  const [newTask, setNewTask] = useState('');
  const [errorTask, setErrorTask] = useState('');

  const classes = useStyleModalAddTodo();

  const saveTask = (e: any): void => {
    e.preventDefault();
    if (taskExist(newTask)) {
      addTask(newTask);
      setNewTask('');
      closeEvent();
    } else {
      setError('Task exist');
    }
  };

  const setError = (txt: string): void => {
    setErrorTask(txt);
    setTimeout(() => {
      setErrorTask('');
    }, 3000);
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
        {errorTask !== '' && <p className={classes.errorText}>{errorTask}</p>}
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
            // eslint-disable-next-line
            inputProps={{ maxlength: 64 }}
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
