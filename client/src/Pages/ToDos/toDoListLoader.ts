import IToDo from "@models/todo";
import { getToDos } from "../../api/todos";

async function toDoListLoader({ request: { signal } }: { request: Request }): Promise<IToDo[]> {
 return getToDos({ signal });
}

export default toDoListLoader;