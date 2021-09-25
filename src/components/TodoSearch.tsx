import React from 'react';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import { useStyleTodoSearch } from 'styles';
import CloseIcon from '@material-ui/icons/Close';

type TodoSearchProps = {
  filter: string;
  // eslint-disable-next-line no-unused-vars
  changeFilter: (txt: string) => void;
};

const TodoSearch: React.FC<TodoSearchProps> = ({ filter, changeFilter, ...props }) => {
  const classes = useStyleTodoSearch();
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        placeholder="Search..."
        onChange={({ target: { value } }) => changeFilter(value)}
        value={filter}
        endAdornment={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <InputAdornment position="end">
            <IconButton onClick={() => changeFilter('')} edge="end">
              <CloseIcon className={classes.colorIcon} />
            </IconButton>
          </InputAdornment>
        }
        classes={{
          notchedOutline: classes.notchedOutline,
        }}
        inputProps={{
          className: classes.input,
          maxLength: 64,
        }}
        {...props}
      />
    </FormControl>
  );
};

export default TodoSearch;
