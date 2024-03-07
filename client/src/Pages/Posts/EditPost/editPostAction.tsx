import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { updatePost } from '../../../api/posts';
import { getFormDate, postFormValidator } from '../postFormHelper';

async function editPostAction({ params, request }: ActionFunctionArgs) {
  const { title, body, userId } = await getFormDate(request);
  const error = postFormValidator({ title, body, userId });

  if (error) {
    return error;
  }

  const post = await updatePost(
    {
      id: parseInt(params.postId as string),
      title: title,
      body: body,
      userId: parseInt(userId),
    },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export default editPostAction;
