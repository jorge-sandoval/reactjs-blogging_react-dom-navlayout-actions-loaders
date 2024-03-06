import { getToDos } from "../../api/todos";
import { LoaderFunctionArgs } from "react-router-dom";

async function toDoListLoader({ request: { signal, url } }: LoaderFunctionArgs){
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get('query') || '';

  return {
    searchParams: {query},
    toDos: await getToDos(query, { signal })
  };
}

export default toDoListLoader;