import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    color: '#000',
    marginBottom: 20,
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
    borderColor: '#000 !important',
  },
  titleModal: {
    textAlign: 'center',
  },
  msgModal: {
    textAlign: 'center',
  },
  buttonsBox: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  btnBox: {
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  cancelBtn: {
    backgroundColor: '#A12568',
    '&:hover': {
      backgroundColor: '#C3478A',
    },
  },
  acceptBtn: {
    backgroundColor: '#3B185F',
    '&:hover': {
      backgroundColor: '#4C296F',
    },
  },
  errorText: {
    color: '#DD0000',
    textAlign: 'center',
    margin: '0px 0px 10px 0px',
  },
}));

export default useStyles;
