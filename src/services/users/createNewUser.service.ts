import { repositorys } from "../../data-source";
import { User } from "../../entities";
import { schemas } from "../../schemas";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";

const create = async (newUserData: TUserRequest): Promise<TUserResponse> => {
    const newUser: User = repositorys.user.create(newUserData);

    await repositorys.user.save(newUser);

    const newUserResponse: TUserResponse = schemas.users.response.parse(newUser);

    return newUserResponse;
};

export { create };