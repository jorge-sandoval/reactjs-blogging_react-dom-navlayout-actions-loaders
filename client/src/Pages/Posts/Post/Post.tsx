import { IComment } from '@models/comment';
import { IPost } from '@models/post';
import { IUser } from '@models/user';
import { NavLink, useLoaderData } from 'react-router-dom';

export default function Post() {
  const { post, comments, user } = useLoaderData() as {
    post: IPost;
    comments: IComment[];
    user: IUser;
  };
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
