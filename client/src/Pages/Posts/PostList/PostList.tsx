import { IPost } from '@models/post';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export default function Posts() {
  const postList = useLoaderData() as IPost[];
  return (
    <>
      <h1 className="page-title">Posts List</h1>
      <div className="card-grid">
        {postList.map((post) => (
          <Fragment key={post.id}>
            <div className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <NavLink className="btn" to={`${post.id}`}>
                  View
                </NavLink>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
