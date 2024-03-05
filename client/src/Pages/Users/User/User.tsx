import { IPost } from '@models/post';
import IToDo from '@models/todo';
import { IUser } from '@models/user';
import { useLoaderData } from 'react-router-dom';
import TodoItem from '../../../components/TodoItem';
import PostCard from '../../../components/PostCard';

export default function Post() {
  const { user, posts, toDos } = useLoaderData() as {
    user: IUser;
    posts: IPost[];
    toDos: IToDo[];
  };

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{' '}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">To Dos</h3>
      <ul>
        {toDos.map((toDo) => (
          <TodoItem key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </>
  );
}
