import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { createPost } from '../../../api/posts';
import { getFormDate, postFormValidator } from '../postFormHelper';

async function newPostAction({ request }: ActionFunctionArgs) {
  const { title, body, userId } = await getFormDate(request);
  const error = postFormValidator({ title, body, userId });

  if (error) {
    return error;
  }

  const post = await createPost(
    {
      title: title as string,
      body: body as string,
      userId: parseInt(userId as string),
    },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export default newPostAction;
