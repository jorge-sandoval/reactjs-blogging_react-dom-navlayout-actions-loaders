import IToDo from "@models/todo";
import { getToDos } from "../../api/todos";
import { LoaderFunctionArgs } from "react-router-dom";

async function toDoListLoader({ request: { signal } }: LoaderFunctionArgs): Promise<IToDo[]> {
 return getToDos({ signal });
}

export default toDoListLoader;