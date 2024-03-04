
import { IUser } from "@models/user";
import { getUsers } from "../../api/users";

async function userListLoader({ request: { signal } }: { request: Request }): Promise<IUser[]> {
 return getUsers({ signal });
}

export default userListLoader;