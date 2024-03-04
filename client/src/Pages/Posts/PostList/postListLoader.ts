
import { IPost } from "@models/post";
import { getPosts } from "../../../api/posts";
import { LoaderFunctionArgs } from "react-router-dom";

async function postListLoader({ request: { signal } }: LoaderFunctionArgs): Promise<IPost[]> {
  return getPosts({ signal });
}

export default postListLoader;