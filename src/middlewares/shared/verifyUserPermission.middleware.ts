import { AppError } from "../../errors";

const verifyUserPermission = (userPermission: boolean): boolean | void => {
    if (!userPermission) throw new AppError("Insufficient permission", 403);

    return userPermission;
};

export {verifyUserPermission};