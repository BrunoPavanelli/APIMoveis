import { repositorys } from "../../data-source";
import { User } from "../../entities";
import { schemas } from "../../schemas";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";

const update = async (userNewData: TUserUpdate, userToUpdate: User): Promise<TUserResponse> => {
    delete userNewData.admin;

    const newUserData = {
        ...userToUpdate,
        ...userNewData
    };

    const userWithNewData: User = await repositorys.user.save(newUserData);

    const userResponse: TUserResponse = schemas.users.response.parse(userWithNewData);

    return userResponse;
};

export { update };