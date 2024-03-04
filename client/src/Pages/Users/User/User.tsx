import { IUser } from '@models/user';
import { useLoaderData } from 'react-router-dom';

export default function Post() {
  const user = useLoaderData() as IUser;
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
    </>
  );
}
