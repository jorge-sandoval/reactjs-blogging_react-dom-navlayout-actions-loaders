
import { IPost } from "@models/post";
import getPosts from "../../api/posts";

async function postListLoader({ request: { signal } }: { request: Request }): Promise<IPost[]> {
  return getPosts({ signal });
}

export default postListLoader;