import IToDo from '@models/todo';
import { useLoaderData } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export default function ToDoList() {
  const toDoList = useLoaderData() as IToDo[];

  return (
    <>
      <h1 className="page-title">Todo List</h1>
      <ul>
        {toDoList.map((toDo) => (
          <Fragment key={toDo.id}>
            <li className={toDo.completed ? 'strike-through' : ''}>
              {toDo.title}
            </li>
          </Fragment>
        ))}
      </ul>
    </>
  );
}
