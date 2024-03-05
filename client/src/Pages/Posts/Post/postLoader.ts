
import { getPost } from "../../../api/posts";
import { LoaderFunctionArgs } from "react-router-dom";
import { getComments } from "../../../api/comments";
import { getUser } from "../../../api/users";

async function postLoader({ params, request: { signal } }: LoaderFunctionArgs) {
  const comments = getComments(params.postId, { signal });
  const post = await getPost(params.postId, { signal });
  const user = getUser(post.userId.toString(), { signal });

  return { post, comments: await comments, user: await user }
}

export default postLoader;