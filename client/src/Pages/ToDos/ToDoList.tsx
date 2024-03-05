import IToDo from '@models/todo';
import { useLoaderData } from 'react-router-dom';
import TodoItem from '../../components/TodoItem';

export default function ToDoList() {
  const toDoList = useLoaderData() as IToDo[];

  return (
    <>
      <h1 className="page-title">Todo List</h1>
      <ul>
        {toDoList.map((toDo) => (
          <TodoItem key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </>
  );
}
