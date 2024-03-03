import { Navigate, createBrowserRouter } from 'react-router-dom';
import NavLayout from './NavLayout';
import Posts from './Pages/Posts/PostList';
import UserList from './Pages/UserList';
import ToDoList from './Pages/ToDoList';
import postListLoader from './Pages/Posts/postListLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="posts" /> },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postListLoader,
          },
          { path: ':postId', element: <h1>Individual Post</h1> },
        ],
      },
      { path: 'users', element: <UserList /> },
      { path: 'todos', element: <ToDoList /> },
      { path: '*', element: <Navigate to="posts" /> },
    ],
  },
]);

export default router;
