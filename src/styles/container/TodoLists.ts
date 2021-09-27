import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  () => ({
    mainBox: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 500,
      width: '90%',
      margin: 'auto',
      alignItems: 'center',
    },
  }),
  { index: 1 },
);

export default useStyles;
