import { AxiosRequestConfig } from "axios";
import baseApi from "./base";
import { IUser } from "@models/user";

const getUsers = async (options: AxiosRequestConfig): Promise<IUser[]> => {
  return baseApi.get("users", options).then((response) => response.data);
};

const getUser = async (userId: string = '', options: AxiosRequestConfig): Promise<IUser> => {
  return baseApi.get(`users/${userId}`, options).then((response) => response.data);
};

export { getUsers, getUser };