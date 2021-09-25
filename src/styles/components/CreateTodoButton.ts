import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  AddTasksButton: {
    backgroundColor: '#A12568',
    color: '#FFF',
    fontWeight: 500,
    marginBottom: 40,
    '&:hover': {
      backgroundColor: '#C3478A',
    },
  },
}));

export default useStyles;
