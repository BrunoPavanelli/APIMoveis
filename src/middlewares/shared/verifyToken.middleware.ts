import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";
import { AppError } from "../../errors";

const verifyToken= (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | null | undefined = req.headers.authorization;

    if (!authorization) throw new AppError("Missing bearer token", 401);

    const [_bearer, token] = authorization.split(" ");

    verify(
        token,
        String(process.env.SECRET_KEY),
        (err: any, decode: any) => {
            if (err) throw new AppError(err.message, 401);

            const userId: string = decode.sub;
            const userIsAdmin: boolean = decode.admin;

            res.locals.userInfos = { userId, userIsAdmin };
        }
    );

    return next();
};

export { verifyToken };