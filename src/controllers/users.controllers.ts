import { Request, Response } from "express";

import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import { services } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const newUserData: TUserRequest = req.body;

    const newUser: TUserResponse = await services.users.create(newUserData);

    return res.status(201).json(newUser);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const users = await services.users.read();

    return res.json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const userNewData = req.body;
    const userToUpdate = res.locals.userToUpdate;

    const userUpdatedResponse = await services.users.update(userNewData, userToUpdate);

    return res.json(userUpdatedResponse);
};

const softDelete = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(req.params.id);

    await services.users.softDelete(userId);

    return res.sendStatus(204);
};

const users = {
    create,
    read,
    update,
    softDelete
};

export { users };