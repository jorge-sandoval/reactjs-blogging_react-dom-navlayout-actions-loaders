import { IPost } from '@models/post';
import { NavLink } from 'react-router-dom';

export default function PostCard({
  post: { id, title, body },
}: {
  post: IPost;
}) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <NavLink className="btn" to={`/posts/${id}`}>
          View
        </NavLink>
      </div>
    </div>
  );
}
