import { IUser } from '@models/user';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../../../components/UserCard';

export default function UserList() {
  const userList = useLoaderData() as IUser[];
  return (
    <>
      <h1 className="page-title">User List</h1>
      <div className="card-grid">
        {userList.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
