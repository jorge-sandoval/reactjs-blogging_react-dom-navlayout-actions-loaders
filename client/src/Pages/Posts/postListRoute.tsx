import Posts from './PostList';
import postListLoader from './postListLoader';

const postListRoute = {
  index: true,
  element: <Posts />,
  loader: postListLoader,
};

export default postListRoute;
