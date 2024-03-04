import UserList from './UserList';
import userListLoader from './userListLoader';

const userListRoute = {
  index: true,
  element: <UserList />,
  loader: userListLoader,
};

export default userListRoute;
