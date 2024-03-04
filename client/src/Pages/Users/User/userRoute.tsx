import User from './User';
import userLoader from './userLoader';

const userRoute = {
  path: ':userId',
  element: <User />,
  loader: userLoader,
};

export default userRoute;
