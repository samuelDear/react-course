export type TodoItemProps = {
  text?: string;
  completed: boolean;
  index: number;
  completeTasks: () => void;
  removeTasks: () => void;
  dragTask: any;
};
