import { IPost } from '@models/post';
import IToDo from '@models/todo';
import { IUser } from '@models/user';
import { NavLink, useLoaderData } from 'react-router-dom';

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
          <div key={post.id} className="card">
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <NavLink className="btn" to={`/posts/${post.id}`}>
                View
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-4 mb-2">To Dos</h3>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'strike-through' : ''}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
