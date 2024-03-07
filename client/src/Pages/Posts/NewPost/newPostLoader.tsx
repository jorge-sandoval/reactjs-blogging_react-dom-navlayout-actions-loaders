import { LoaderFunctionArgs } from 'react-router-dom';
import { getUsers } from '../../../api/users';

async function newPostLoader({ request: { signal } }: LoaderFunctionArgs) {
  const authors = getUsers({ signal });
  return { authors: await authors };
}

export default newPostLoader;
