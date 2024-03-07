import { getPosts } from "../../../api/posts";
import { LoaderFunctionArgs } from "react-router-dom";
import { getUsers } from "../../../api/users";

async function postListLoader({ request: { signal, url } }: LoaderFunctionArgs) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get('query') || null;
  const userId = searchParams.get('userId') || null;

  const authors = getUsers({ signal });
  const posts = getPosts({ signal, params: { q: query, userId  }});

  return {
    searchParams: { query, userId },
    posts: await posts,
    authors: await authors
  }
}

export default postListLoader;