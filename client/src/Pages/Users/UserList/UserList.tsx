import { IUser } from '@models/user';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export default function UserList() {
  const userList = useLoaderData() as IUser[];
  return (
    <>
      <h1 className="page-title">User List</h1>
      <div className="card-grid">
        {userList.map((user) => (
          <Fragment key={user.id}>
            <div className="card">
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
              </div>
              <div className="card-footer">
                <NavLink className="btn" to={`${user.id}`}>
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
