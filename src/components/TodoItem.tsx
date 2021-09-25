import React, { useRef } from 'react';
import { Checkbox, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import { TodoItemProps } from 'types';
import { useStyleTodoItem } from 'styles';

const TodoItem: React.FC<TodoItemProps> = ({
  completed,
  completeTasks,
  removeTasks,
  dragTask,
  index,
  text = '',
}) => {
  const classes = useStyleTodoItem();
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dragTask(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => ({ index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Grid
      container
      item
      ref={ref}
      xs={12}
      className={`${classes.tasksBox} ${isDragging && classes.hideItem}`}
      data-handler-id={handlerId}
    >
      <Grid container item xs={2}>
        <Checkbox checked={completed} onChange={completeTasks} />
      </Grid>
      <Grid container item xs={8} justifyContent="center">
        <p className={`${classes.contentText} ${completed && classes.completedTasks}`}>{text}</p>
      </Grid>
      <Grid container item xs={2} justifyContent="flex-end">
        <IconButton aria-label="delete" size="small" onClick={removeTasks}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
