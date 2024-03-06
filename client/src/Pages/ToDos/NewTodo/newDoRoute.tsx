import NewToDo from './NewTodo';
import newToDoAction from './newTodoAction';

const newToDoRoute = {
  path: 'new',
  element: <NewToDo />,
  action: newToDoAction,
};

export default newToDoRoute;
