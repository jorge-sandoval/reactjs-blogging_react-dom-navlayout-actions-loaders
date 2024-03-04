
import { IPost } from "@models/post";
import { getPost } from "../../../api/posts";
import { LoaderFunctionArgs } from "react-router-dom";

async function postLoader({ params, request: { signal } }: LoaderFunctionArgs): Promise<IPost> {
  return getPost(params.postId, { signal });
}

export default postLoader;