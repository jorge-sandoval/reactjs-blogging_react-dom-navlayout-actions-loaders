import { AxiosRequestConfig } from "axios";
import baseApi from "./base";
import { IPost } from "@models/post";

const getPosts = async (options: AxiosRequestConfig): Promise<IPost[]> => {
  return baseApi.get("posts", options).then((response) => response.data);
};

const getPost = async (postId: string = '', options: AxiosRequestConfig): Promise<IPost> => {
  return baseApi.get(`posts/${postId}`, options).then((response) => response.data);
};

export { getPosts, getPost };
