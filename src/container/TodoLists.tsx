import React, { useCallback, useState, useEffect } from 'react';
import update from 'immutability-helper';
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
import { useLocalStorage } from '../config/useLocalStorage';

const TodoLists: React.FC = () => {
  const { getItem: getTodos, saveItem: saveTodo } = useLocalStorage('TASKS', []);
  const classes = useStyleTodoLists();
  const [filter, setFilter] = useState('');
  const [addTask, setAddTask] = useState(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    if (getTodos()) {
      setTodos(getTodos());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveTodo(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

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

  // Validamos el tasks que no exista uno igual
  const validateTask = (text: string): boolean => {
    const todosTmp = todos.filter((el: TodoType) => el.text === text);

    return todosTmp.length === 0;
  };

  const addNewTask = (text: string): void => {
    const todosTmp = todos;
    todosTmp.push({
      text,
      completed: false,
    });
    setTodos(todosTmp);
    saveTodo(todosTmp);
  };

  const validateFilter = (text: string): boolean =>
    filter === '' ? true : text.toLowerCase().includes(filter.toLowerCase());

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = todos[dragIndex];
      setTodos(
        update(todos, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [todos],
  );

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
              index={index}
              text={el.text}
              completed={el.completed}
              completeTasks={() => completeTask(index)}
              removeTasks={() => removeTasks(index)}
              dragTask={moveCard}
            />
          ))}
      </TodoList>
      <CreateTodoButton event={openModalCreateTodo} />
      <ModalAddTodo
        open={addTask}
        taskExist={validateTask}
        closeEvent={() => setAddTask(false)}
        addTask={(txt: string) => addNewTask(txt)}
      />
    </Layout>
  );
};

export default TodoLists;
