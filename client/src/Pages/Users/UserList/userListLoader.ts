
import { IUser } from "@models/user";
import { getUsers } from "../../../api/users";
import { LoaderFunctionArgs } from "react-router-dom";

async function userListLoader({ request: { signal } }: LoaderFunctionArgs): Promise<IUser[]> {
 return getUsers({ signal });
}

export default userListLoader;