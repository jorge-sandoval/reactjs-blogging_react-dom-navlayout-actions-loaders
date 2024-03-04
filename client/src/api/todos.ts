import { AxiosRequestConfig } from "axios";
import baseApi from "./base";

const getToDos = async (options: AxiosRequestConfig) => {
  return baseApi.get("todos", options).then((response) => response.data);
};

export { getToDos };