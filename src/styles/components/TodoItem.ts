import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(
  (theme: Theme) => ({
    tasksBox: {
      background: '#EEE',
      borderRadius: 12,
      boxShadow: theme.shadows[2],
      margin: `${theme.spacing(2)}px 0px`,
      padding: 14,
    },
    contentText: {
      display: 'flex',
      alignItems: 'center',
      color: '#3d3d3d',
      width: '100%',
      wordBreak: 'break-word',
    },
    completedTasks: {
      textDecoration: 'line-through',
    },
    hideItem: {
      opacity: 0,
    },
  }),
  { index: 1 },
);

export default useStyles;
