import axios from "axios";
import { IPost } from "../../models/post";

async function postListLoader({ request: { signal } }: { request: Request }): Promise<IPost[]> {
  const baseUrl = import.meta.env.VITE_API_URL;
  return axios
    .get(`${baseUrl}/posts`, { signal })
    .then((response) => {
      return response.data;
    });
}

export default postListLoader;