import { IComment } from '@models/comment';
import { IPost } from '@models/post';
import { IUser } from '@models/user';
import { NavLink, useLoaderData } from 'react-router-dom';
import CommentCard from '../../../components/CommentCard';

export default function Post() {
  const { post, comments, user } = useLoaderData() as {
    post: IPost;
    comments: IComment[];
    user: IUser;
  };
  return (
    <>
      <div className="container">
        <h1 className="page-title">
          {post.title}
          <div className="title-btns">
            <NavLink className="btn" to={'edit'}>
              Edit
            </NavLink>
          </div>
        </h1>
        <span className="page-subtitle">
          By: <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
        </span>
        <div>{post.body}</div>
        <h3 className="mt-4 mb-2">Comments</h3>
        <div className="card-stack">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
