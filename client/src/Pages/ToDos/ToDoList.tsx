import { useLoaderData } from 'react-router-dom';
import TodoItem from '../../components/TodoItem';
import TodoForm from '../../components/ToDoForm';
import IToDo from '@models/todo';

export default function ToDoList() {
  const { searchParams, toDos } = useLoaderData() as {
    searchParams: { query: string };
    toDos: IToDo[];
  };

  return (
    <>
      <h1 className="page-title">Todo List</h1>
      <TodoForm searchParams={searchParams} />
      <ul>
        {toDos.map((toDo) => (
          <TodoItem key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </>
  );
}
