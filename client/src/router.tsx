import { Navigate, createBrowserRouter } from 'react-router-dom';
import NavLayout from './NavLayout';
import postListRoute from './Pages/Posts/postListRoute';
import userListRoute from './Pages/Users/userListRoute';
import toDoListRoute from './Pages/ToDos/toDoListRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="posts" /> },
      {
        path: 'posts',
        children: [
          postListRoute,
          { path: ':postId', element: <h1>Individual Post</h1> },
        ],
      },
      {
        path: 'users',
        children: [
          userListRoute,
          { path: ':userId', element: <h1>Individual User</h1> },
        ],
      },
      {
        path: 'todos',
        children: [
          toDoListRoute,
          { path: ':todoId', element: <h1>Individual To DO</h1> },
        ],
      },
      { path: '*', element: <Navigate to="posts" /> },
    ],
  },
]);

export default router;
