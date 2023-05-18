import { z } from "zod";

const address = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20),
    state: z.string().max(2)
});

const addressArray = address.array();

const addressSave = address.omit({id: true});

const realEstate = z.object({
    id: z.number(),
    sold: z.boolean().nullish(),
    value: z.union([z.string(), z.number()]),
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: address,
    category: z.object({
        id: z.number(),
        name: z.string().max(45)
    })
});

const created = realEstate.omit({category: true}).extend({categoryId: z.number()});

const save = realEstate.omit({id: true, createdAt: true, updatedAt: true, address: true, category: true});

const request = save.extend({
    address: addressSave,
    categoryId: z.number()
});

const realEstates = {
    address,
    addressArray,
    save,
    realEstate,
    request,
    addressSave,
    created
};

export { realEstates };