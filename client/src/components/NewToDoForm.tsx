import {
  Form,
  NavLink,
  useActionData,
  useLocation,
  useNavigation,
} from 'react-router-dom';

export default function NewToDoForm() {
  const location = useLocation();
  const error = useActionData() as { title: string };
  const { state } = useNavigation();
  const isProcessing = state === 'submitting' || state === 'loading';

  return (
    <Form className="form" method="post" action={location.pathname}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="query">Title</label>
          <input type="text" id="title" name="title" />
        </div>
      </div>
      {error?.title && <div className="error">{error.title}</div>}
      <div className="form-row form-btn-row">
        {isProcessing ? (
          <span className="btn btn-outline btn-outline-disabled">Back</span>
        ) : (
          <NavLink to="/todos" className="btn btn-outline">
            Back
          </NavLink>
        )}
        <button className="btn" disabled={isProcessing}>
          Create
        </button>
      </div>
    </Form>
  );
}
