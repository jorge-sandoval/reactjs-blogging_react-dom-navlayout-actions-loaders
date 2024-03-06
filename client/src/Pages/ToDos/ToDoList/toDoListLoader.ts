import { getToDos } from "../../../api/todos";
import { LoaderFunctionArgs } from "react-router-dom";

async function toDoListLoader({ request: { signal, url } }: LoaderFunctionArgs){
  const searchParams = new URL(url).searchParams;
  const titleQuery = searchParams.get('title') || '';

  return {
    searchParams: {titleQuery},
    toDos: await getToDos(titleQuery, { signal })
  };
}

export default toDoListLoader;