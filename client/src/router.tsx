import { Navigate, createBrowserRouter } from 'react-router-dom';
import NavLayout from './NavLayout';
import postListRoute from './Pages/Posts/PostList/postListRoute';
import userListRoute from './Pages/Users/UserList/userListRoute';
import toDoListRoute from './Pages/ToDos/toDoListRoute';
import postRoute from './Pages/Posts/Post/postRoute';
import userRoute from './Pages/Users/User/userRoute';
import ErrorPage from './Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="posts" /> },
          {
            path: 'posts',
            children: [postListRoute, postRoute],
          },
          {
            path: 'users',
            children: [userListRoute, userRoute],
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
    ],
  },
]);

export default router;
