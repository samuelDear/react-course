import React, { useState } from 'react';
import { TodoCounter, TodoSearch, TodoItem, CreateTodoButton, TodoList, Layout } from 'components';
import { useStyleTodoLists } from 'styles';
import { TodoType } from 'types';

const TodoLists: React.FC = () => {
  const classes = useStyleTodoLists();
  const [filter, setFilter] = useState('');
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

  return (
    <Layout className={classes.mainBox}>
      <TodoCounter completed={countCompletedTasks()} total={todos.length} />
      <TodoSearch filter={filter} changeFilter={(txt: string) => setFilter(txt)} />
      <TodoList>
        {todos.map((el: TodoType, index: number) => (
          <TodoItem
            key={el.text}
            text={el.text}
            completed={el.completed}
            completeTasks={() => completeTask(index)}
            removeTasks={() => removeTasks(index)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Layout>
  );
};

export default TodoLists;