import { useEffect, useRef } from 'react';
import toDoFormSettings from '../models/todo-form-settings';
import {
  Form,
  FormMethod,
  NavLink,
  useActionData,
  useLocation,
  useNavigation,
} from 'react-router-dom';

export default function ToDoForm({
  type = 'search',
  searchParams,
}: {
  type: 'create' | 'search';
  searchParams?: { titleQuery: string };
}) {
  const { method, inputLabel, buttonLabel, backButton } =
    toDoFormSettings[type];
  const query = searchParams?.titleQuery || '';

  const location = useLocation();
  const error = useActionData() as { title: string };
  const inputRef = useRef<HTMLInputElement>(null);
  const { state } = useNavigation();
  const isProcessing = state === 'submitting' || state === 'loading';

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = query;
    }
  }, [query]);

  return (
    <Form
      className="form"
      method={method as FormMethod}
      action={location.pathname}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">{inputLabel}</label>
          <input type="text" id="title" name="title" ref={inputRef} />
        </div>
      </div>
      {error?.title && <div className="error">{error.title}</div>}
      <div className="form-row form-btn-row">
        {backButton &&
          (isProcessing ? (
            <span className="btn btn-outline btn-outline-disabled">Back</span>
          ) : (
            <NavLink to="/todos" className="btn btn-outline">
              Back
            </NavLink>
          ))}
        <button className="btn" disabled={isProcessing}>
          {buttonLabel}
        </button>
      </div>
    </Form>
  );
}
