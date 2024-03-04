import { LoaderFunctionArgs } from "react-router-dom";
import { IUser } from "@models/user";
import { getUser } from "../../../api/users";

async function userLoader({ params, request: { signal } }: LoaderFunctionArgs): Promise<IUser> {
  return getUser(params.userId, { signal });
}

export default userLoader;