import { IUser } from '@models/user';
import { NavLink } from 'react-router-dom';

export default function UserCard({
  user: { id, name, email, phone, website },
}: {
  user: IUser;
}) {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div className="card-preview-text">{email}</div>
        <div className="card-preview-text">{phone}</div>
        <div className="card-preview-text">{website}</div>
      </div>
      <div className="card-footer">
        <NavLink className="btn" to={`/users/${id}`}>
          View
        </NavLink>
      </div>
    </div>
  );
}
