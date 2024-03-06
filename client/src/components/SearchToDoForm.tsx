import { useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';

export default function SearchTodoForm({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  const queryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (queryRef.current) {
      queryRef.current.value = query;
    }
  }, [query]);

  return (
    <Form className="form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="query"> Search</label>
          <input type="text" id="query" name="query" ref={queryRef} />
        </div>
        <button className="btn">Search</button>
      </div>
    </Form>
  );
}
