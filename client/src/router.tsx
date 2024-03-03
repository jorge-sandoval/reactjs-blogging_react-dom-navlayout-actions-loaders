import { Navigate, createBrowserRouter } from 'react-router-dom';
import NavLayout from './NavLayout';
import Posts from './Pages/PostList';
import UserList from './Pages/UserList';
import ToDoList from './Pages/ToDoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="posts" /> },
      { path: 'posts', element: <Posts /> },
      { path: 'users', element: <UserList /> },
      { path: 'todos', element: <ToDoList /> },
      { path: '*', element: <Navigate to="posts" /> },
    ],
  },
]);

export default router;
