import Post from './Post';
import postLoader from './postLoader';

const postRoute = {
  index: true,
  element: <Post />,
  loader: postLoader,
};

export default postRoute;
