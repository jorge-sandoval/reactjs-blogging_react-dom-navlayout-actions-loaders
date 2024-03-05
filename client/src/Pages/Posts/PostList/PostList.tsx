import { IPost } from '@models/post';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../../../components/PostCard';

export default function Posts() {
  const postList = useLoaderData() as IPost[];
  return (
    <>
      <h1 className="page-title">Posts List</h1>
      <div className="card-grid">
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
