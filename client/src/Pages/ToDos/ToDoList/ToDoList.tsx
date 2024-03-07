import { NavLink, useLoaderData } from 'react-router-dom';
import TodoItem from '../../../components/TodoItem';
import IToDo from '@models/todo';
import ToDoForm from '../../../components/ToDoForm';

export default function ToDoList() {
  const { searchParams, toDos } = useLoaderData() as {
    searchParams: { titleQuery: string };
    toDos: IToDo[];
  };

  console.log('toDos', toDos);

  return (
    <>
      <h1 className="page-title">
        Todo List
        <div className="title-btns">
          <NavLink className="btn" to={'new'}>
            New
          </NavLink>
        </div>
      </h1>

      <ToDoForm type="search" searchParams={searchParams} />
      <ul>
        {toDos.map((toDo) => (
          <TodoItem key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </>
  );
}
