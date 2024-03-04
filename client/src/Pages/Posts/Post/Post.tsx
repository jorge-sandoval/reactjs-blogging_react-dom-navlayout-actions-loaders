import { IPost } from '@models/post';
import { useLoaderData } from 'react-router-dom';

export default function Post() {
  const post = useLoaderData() as IPost;
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>
    </>
  );
}
