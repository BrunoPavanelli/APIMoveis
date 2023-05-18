import { z } from "zod";

const loginData = z.object({
    email: z.string().email(),
    password: z.string()
});

const userLoginDataToken = z.object({
    admin: z.boolean(),
    id: z.number()
});

const login = {
    loginData,
    userLoginDataToken
};

export { login };