import { AxiosRequestConfig } from "axios";
import baseApi from "./base";

const getUsers = async (options: AxiosRequestConfig) => {
  return baseApi.get("users", options).then((response) => response.data);
};

const getUser = async (userId: string = '', options: AxiosRequestConfig) => {
  return baseApi.get(`users/${userId}`, options).then((response) => response.data);
};

export { getUsers, getUser };