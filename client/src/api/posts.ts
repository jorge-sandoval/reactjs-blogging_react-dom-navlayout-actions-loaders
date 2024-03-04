import { AxiosRequestConfig } from "axios";
import baseApi from "./base";

const getPosts = async (options: AxiosRequestConfig) => {
  return baseApi.get("posts", options).then((response) => response.data);
};

const getPost = async (postId: string = '', options: AxiosRequestConfig) => {
  return baseApi.get(`posts/${postId}`, options).then((response) => response.data);
};

export { getPosts, getPost };
