import Post from './Post';
import postLoader from './postLoader';

const postRoute = {
  path: ':postId',
  element: <Post />,
  loader: postLoader,
};

export default postRoute;
