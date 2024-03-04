import { Navigate, createBrowserRouter } from 'react-router-dom';
import NavLayout from './NavLayout';
import ToDoList from './Pages/ToDoList';
import postListRoute from './Pages/Posts/postListRoute';
import userListRoute from './Pages/Users/userListRoute';

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
      { path: 'todos', element: <ToDoList /> },
      { path: '*', element: <Navigate to="posts" /> },
    ],
  },
]);

export default router;
