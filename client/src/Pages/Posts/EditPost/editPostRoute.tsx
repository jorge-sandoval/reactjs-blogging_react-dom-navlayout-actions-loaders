import EditPost from './EditPost';
import editPostAction from './editPostAction';
import editPostLoader from './editPostLoader';

const editPostRoute = {
  path: 'edit',
  element: <EditPost />,
  loader: editPostLoader,
  action: editPostAction,
};

export default editPostRoute;
