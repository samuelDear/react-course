import React, { useState } from 'react';
import {
  TodoCounter,
  TodoSearch,
  TodoItem,
  CreateTodoButton,
  TodoList,
  Layout,
  ModalAddTodo,
} from 'components';
import { useStyleTodoLists } from 'styles';
import { TodoType } from 'types';

const TodoLists: React.FC = () => {
  const classes = useStyleTodoLists();
  const [filter, setFilter] = useState('');
  const [addTask, setAddTask] = useState(false);
  const [todos, setTodos] = useState([
    {
      text: 'Cortar Cebolla',
      completed: true,
    },
    {
      text: 'Llorar',
      completed: false,
    },
  ]);

  const countCompletedTasks = (): number => {
    const todosCompleted: TodoType[] = todos.filter((el: TodoType) => el.completed === true);
    return todosCompleted.length;
  };

  const completeTask = (index: number): void => {
    const todosTmp = [...todos];
    todosTmp[index].completed = !todosTmp[index].completed;
    setTodos(todosTmp);
  };

  const removeTasks = (index: number): void => {
    const todosTmp = todos.filter((el: any, indexArr: number) => indexArr !== index);
    setTodos(todosTmp);
  };

  const openModalCreateTodo = (): void => {
    setAddTask(true);
  };

  const addNewTask = (text: string): void => {
    const todosTmp = todos;
    todosTmp.push({
      text,
      completed: false,
    });
    setTodos(todosTmp);
  };

  const validateFilter = (text: string): boolean =>
    filter === '' ? true : text.toLowerCase().includes(filter.toLowerCase());

  return (
    <Layout className={classes.mainBox}>
      <TodoCounter completed={countCompletedTasks()} total={todos.length} />
      <TodoSearch filter={filter} changeFilter={(txt: string) => setFilter(txt)} />
      <TodoList>
        {todos
          .filter(({ text }) => validateFilter(text))
          .map((el: TodoType, index: number) => (
            <TodoItem
              key={el.text}
              text={el.text}
              completed={el.completed}
              completeTasks={() => completeTask(index)}
              removeTasks={() => removeTasks(index)}
            />
          ))}
      </TodoList>
      <CreateTodoButton event={openModalCreateTodo} />
      <ModalAddTodo
        open={addTask}
        closeEvent={() => setAddTask(false)}
        addTask={(txt: string) => addNewTask(txt)}
      />
    </Layout>
  );
};

export default TodoLists;
