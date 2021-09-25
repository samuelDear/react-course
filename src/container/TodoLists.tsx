import React, { useState } from 'react';
import { TodoCounter, TodoSearch, TodoItem, CreateTodoButton, TodoList, Layout } from 'components';
import { useStyleTodoLists } from 'styles';

const TodoLists: React.FC = () => {
  const classes = useStyleTodoLists();
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState([
    {
      text: 'Cortar Cebolla',
      completed: false,
    },
    {
      text: 'Llorar',
      completed: false,
    },
  ]);

  return (
    <Layout className={classes.mainBox}>
      <TodoCounter />
      <TodoSearch filter={filter} changeFilter={(txt: string) => setFilter(txt)} />
      <TodoList>
        {todos.map((el: any) => (
          <TodoItem key={el.text} text={el.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Layout>
  );
};

export default TodoLists;
