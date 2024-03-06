import ToDoList from './ToDoList';
import toDoListLoader from './toDoListLoader';

const toDoListRoute = {
  index: true,
  element: <ToDoList />,
  loader: toDoListLoader,
};

export default toDoListRoute;
