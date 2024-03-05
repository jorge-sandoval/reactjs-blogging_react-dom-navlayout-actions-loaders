import { AxiosRequestConfig } from "axios";
import baseApi from "./base";
import IToDo from "@models/todo";

const getToDos = async (options: AxiosRequestConfig): Promise<IToDo[]> => {
  return baseApi.get("todos", options).then((response) => response.data);
};

const getToDosByUserId = async (userId: string ='', options: AxiosRequestConfig): Promise<IToDo[]> => {
  return baseApi.get(`todos?userId=${userId}`, options).then((response) => response.data);
};

export { getToDos, getToDosByUserId };