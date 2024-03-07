export async function getFormDate(request: Request) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;
  const userId = formData.get('userId') as string;
  return { title, body, userId };
}

export function postFormValidator({ title, body, userId }: { title: string, body: string, userId: string }) {
  const error = { title: '', body: '', userId: '' };
  if (!title) {
    error.title = 'Title is required';
  }
  if (!body) {
    error.body = 'Body is required';
  }
  if (!userId) {
    error.userId = 'Author is required';
  }

  return Object.values(error).some(value => value) ? error : null;
}