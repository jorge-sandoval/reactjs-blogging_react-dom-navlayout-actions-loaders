import { LoaderFunctionArgs } from "react-router-dom";
import { getUser } from "../../../api/users";
import { getPostsByUserId } from "../../../api/posts";
import { getToDosByUserId } from "../../../api/todos";

async function userLoader({ params, request: { signal } }: LoaderFunctionArgs) {
  const user = getUser(params.userId, { signal });
  const posts = getPostsByUserId(params.userId, { signal });
  const toDos = getToDosByUserId(params.userId, { signal });

  return { user: await user, posts: await posts, toDos: await toDos};
}

export default userLoader;