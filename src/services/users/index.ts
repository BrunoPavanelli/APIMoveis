import { create } from "./createNewUser.service";
import { read } from "./readUsers.service";
import { update } from "./updateUser.service";
import { softDelete } from "./softDeleteUser.service";

const users = {
    create,
    read,
    update,
    softDelete
};

export { users };