import { IUser } from '@models/user';
import {
  Form,
  FormMethod,
  NavLink,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigation,
} from 'react-router-dom';
import FormGroup from './FormGroup';
import { IPost } from '@models/post';

export default function PostForm({ mode }: { mode: 'create' | 'edit' }) {
  const postFormSettings = {
    create: {
      buttonLabel: 'Save',
      method: 'post',
    },
    edit: {
      buttonLabel: 'Update',
      method: 'put',
    },
  };
  const { buttonLabel, method } = postFormSettings[mode];

  const { post, authors } = useLoaderData() as {
    post: IPost;
    authors: IUser[];
  };
  const defaultValues: Partial<IPost> = post || {};

  const error = useActionData() as {
    title: string;
    userId: string;
    body: string;
  };
  const location = useLocation();
  const { state } = useNavigation();
  const isProcessing = state === 'submitting' || state === 'loading';

  return (
    <>
      <Form
        method={method as FormMethod}
        action={location.pathname}
        className="form"
      >
        <div className="form-row">
          <FormGroup error={error?.title}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={defaultValues.title}
            />
          </FormGroup>
          <FormGroup error={error?.userId}>
            <label htmlFor="userId">Author</label>
            <select
              name="userId"
              id="userId"
              defaultValue={defaultValues.userId}
            >
              <option value="">Select</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup error={error?.body}>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              defaultValue={defaultValues.body}
            ></textarea>
          </FormGroup>
        </div>
        <div className="form-row form-btn-row">
          {isProcessing ? (
            <span className="btn btn-outline btn-outline-disabled">Cancel</span>
          ) : (
            <NavLink to=".." className="btn btn-outline">
              Cancel
            </NavLink>
          )}
          <button className="btn" disabled={isProcessing}>
            {buttonLabel}
          </button>
        </div>
      </Form>
    </>
  );
}
