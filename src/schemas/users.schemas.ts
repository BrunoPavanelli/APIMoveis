import { z } from "zod";

const user = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish(),
});

const request = user.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true});

const response = user.omit({password: true});

const responseArray = response.array();

const users = {
    user,
    request,
    response,
    responseArray,
};

export { users };