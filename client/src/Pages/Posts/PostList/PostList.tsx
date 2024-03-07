import { IPost } from '@models/post';
import { NavLink, useLoaderData } from 'react-router-dom';
import PostCard from '../../../components/PostCard';
import SearchPostForm from '../../../components/SearchPostForm';

export default function Posts() {
  const { posts } = useLoaderData() as {
    posts: IPost[];
  };

  return (
    <>
      <div className="container">
        <h1 className="page-title">
          Posts List
          <div className="title-btns">
            <NavLink className="btn" to={'new'}>
              New
            </NavLink>
          </div>
        </h1>
        <SearchPostForm />
        <div className="card-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
