import { AxiosRequestConfig } from "axios";
import baseApi from "./base";

const getPosts = async (options: AxiosRequestConfig) => {
  return baseApi.get("posts", options).then((response) => response.data);
};

export default getPosts;