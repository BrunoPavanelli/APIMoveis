import { ZodTypeAny, z } from "zod";

const category = z.object({
    id: z.number(),
    name: z.string().max(45)
});

const categoryById = category.extend({
    realEstate: z.object({
        id: z.number(),
        sold: z.boolean().nullish(),
        value: z.union([z.string(), z.number()]),
        size: z.number().positive(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }).nullish()
});

const request = category.omit({id: true});

const categories = {
    category,
    categoryById,
    request
};

export { categories };