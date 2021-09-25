export type TodoItemProps = {
  text?: string;
  completed: boolean;
  completeTasks: () => void;
  removeTasks: () => void;
};
