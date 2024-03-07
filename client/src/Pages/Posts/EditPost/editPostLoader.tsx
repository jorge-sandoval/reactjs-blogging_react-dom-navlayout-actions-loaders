import { LoaderFunctionArgs } from 'react-router-dom';
import { getPost } from '../../../api/posts';
import { getUsers } from '../../../api/users';

async function editPostLoader({
  params,
  request: { signal },
}: LoaderFunctionArgs) {
  const post = getPost(params.postId, { signal });
  const authors = getUsers({ signal });

  return { post: await post, authors: await authors };
}

export default editPostLoader;
