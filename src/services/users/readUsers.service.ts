import { repositorys } from "../../data-source";
import { User } from "../../entities";
import { schemas } from "../../schemas";
import { TUserResponseArray } from "../../interfaces/users.interfaces";

const read = async (): Promise<TUserResponseArray> => {
    const allUsers: User[] = await repositorys.user.find();

    const allUsersResponse: TUserResponseArray = schemas.users.responseArray.parse(allUsers);

    return allUsersResponse;
};

export { read };