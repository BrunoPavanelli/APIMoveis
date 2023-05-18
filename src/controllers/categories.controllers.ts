import { Request, Response } from "express";

import { TCategory, TCategoryById } from "../interfaces/categories.interfaces";
import { Category } from "../entities";
import { services } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const categorieData: TCategory = req.body;

    const newCategory: TCategory = await services.categories.create(categorieData);

    return res.status(201).json(newCategory);
};

const read = async (_req: Request, res: Response): Promise<Response> => {
    const categories: Category[] = await services.categories.read();

    return res.json(categories);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
    const categoryId: number = Number(req.params.id);

    const category: TCategoryById = await services.categories.readById(categoryId);

    return res.json(category);
};

const categories = {
    create,
    read,
    readById
};

export { categories }; 