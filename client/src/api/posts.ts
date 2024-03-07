import { AxiosRequestConfig } from "axios";
import baseApi from "./base";
import { IPost } from "@models/post";

const createPost = async (post: Partial<IPost>, options: AxiosRequestConfig): Promise<IPost> => {
  return baseApi.post("posts", post, {
    headers: { 'Content-Type': 'application/json'},
    ...options
  }).then((response) => response.data);
}

const updatePost = async (post: Partial<IPost>, options: AxiosRequestConfig): Promise<IPost> => {
  return baseApi.put(`posts/${post.id}`, post, {
    headers: { 'Content-Type': 'application/json'},
    ...options
  }).then((response) => response.data);
}

const getPosts = async (options: AxiosRequestConfig): Promise<IPost[]> => {
  return baseApi.get("posts", options).then((response) => response.data);
};

const getPost = async (postId: string = '', options: AxiosRequestConfig): Promise<IPost> => {
  return baseApi.get(`posts/${postId}`, options).then((response) => response.data);
};

const getPostsByUserId = async (userId: string = '', options: AxiosRequestConfig): Promise<IPost[]> => {
  return baseApi.get(`posts?userId=${userId}`, options).then((response) => response.data);
};


export { createPost, updatePost, getPosts, getPost, getPostsByUserId };
