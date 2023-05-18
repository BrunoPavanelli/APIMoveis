import { sign } from "jsonwebtoken";
import "dotenv/config";

import { TLoginDataToken } from "../../interfaces/login.interfaces";

export const generateToken = (tokenData: TLoginDataToken): string => {
    const { admin, id } = tokenData;

    const token = sign(
        {admin: admin},
        String(process.env.SECRET_KEY),
        {expiresIn: "24h", subject: String(id)}
    );

    return token;
};