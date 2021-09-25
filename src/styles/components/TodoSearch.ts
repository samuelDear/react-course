import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  input: {
    color: '#FFF',
  },
  colorIcon: {
    color: '#FFF',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#FEC260 !important',
    },
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#FFF !important',
  },
}));

export default useStyles;
