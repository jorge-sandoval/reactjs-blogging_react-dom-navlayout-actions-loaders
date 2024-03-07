import { Form, useLoaderData, useLocation } from 'react-router-dom';
import { IUser } from '@models/user';

export default function SearchPostForm() {
  const location = useLocation();
  const { authors, searchParams } = useLoaderData() as {
    searchParams: { query: string; userId: string };
    authors: IUser[];
  };

  return (
    <>
      <Form method="get" action={location.pathname} className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input
              type="search"
              name="query"
              id="query"
              defaultValue={searchParams.query}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select
              name="userId"
              id="userId"
              defaultValue={searchParams.userId}
            >
              <option value="">Any</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </Form>
    </>
  );
}
