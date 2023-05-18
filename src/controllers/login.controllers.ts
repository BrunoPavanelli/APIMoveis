import { Request, Response } from "express";

import { TLoginDataToken } from "../interfaces/login.interfaces";
import { services } from "../services";

export const login = async (req: Request, res: Response): Promise<Response> => {
    const dataToken: TLoginDataToken = res.locals.dataToken;

    const token = services.login.generateToken(dataToken);

    const tokenResponse = { token };

    return res.json(tokenResponse);
};  