import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { newToDo } from '../../../api/todos';

async function newToDoAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');

  if (!title) {
    return {
      title: 'Title is required',
    };
  }

  await newToDo(
    {
      title: title as string,
      completed: false,
    },
    { signal: request.signal }
  );

  return redirect(`/todos`);
}

export default newToDoAction;
