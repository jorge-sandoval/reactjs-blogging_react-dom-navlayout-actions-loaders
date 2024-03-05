import { AxiosRequestConfig } from "axios";
import baseApi from "./base";

const getComments = async (postId: string = '', options: AxiosRequestConfig) => {
  return baseApi.get(`posts/${postId}/comments`, options).then(res => res.data)
};

export { getComments };
