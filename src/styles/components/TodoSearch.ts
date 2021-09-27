import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  () => ({
    input: {
      color: '#FFF',
      '&::': {
        color: '#FFF',
      },
    },
    colorIcon: {
      color: '#FFF',
    },
    notchedOutline: {
      borderWidth: '1px',
      borderColor: '#FFF !important',
    },
  }),
  { index: 1 },
);

export default useStyles;
