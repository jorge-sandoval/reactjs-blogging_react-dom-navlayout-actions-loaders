import NewPost from './NewPost';
import newPostAction from './newPostAction';
import newPostLoader from './newPostLoader';

const newPostRoute = {
  path: 'new',
  element: <NewPost />,
  action: newPostAction,
  loader: newPostLoader,
};

export default newPostRoute;
