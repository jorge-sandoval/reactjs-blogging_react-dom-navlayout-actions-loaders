import { AxiosRequestConfig } from "axios";
import baseApi from "./base";
import IToDo from "@models/todo";

const newToDo = async (toDo: Partial<IToDo>, options: AxiosRequestConfig): Promise<IToDo> => {
  return baseApi.post("todos", toDo, {
    headers: { 'Content-Type': 'application/json'},
    ...options
  }).then((response) => response.data);
}

const getToDos = async (filter: string = '', options: AxiosRequestConfig): Promise<IToDo[]> => {
  let url = "todos";
  if (filter) {
    url += `?q=${filter}`;
  }
  return baseApi.get(url, options).then((response) => response.data);
};

const getToDosByUserId = async (userId: string ='', options: AxiosRequestConfig): Promise<IToDo[]> => {
  return baseApi.get(`todos?userId=${userId}`, options).then((response) => response.data);
};

export { newToDo, getToDos, getToDosByUserId };