import { z } from "zod";
import { DeepPartial } from "typeorm";

import { schemas } from "../schemas";

type TUser = z.infer<typeof schemas.users.user>

type TUserRequest = z.infer<typeof schemas.users.request>

type TUserResponse = z.infer<typeof schemas.users.response>

type TUserResponseArray = z.infer<typeof schemas.users.responseArray>

type TUserUpdate = DeepPartial<TUserRequest>

type TUserTokenInfos = {
    userId: number,
    userIsAdmin: boolean
};

export { TUser, TUserRequest, TUserResponse, TUserResponseArray, TUserUpdate, TUserTokenInfos };