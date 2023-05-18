import { repositorys } from "../../data-source";
import { Category } from "../../entities";
import { TCategoryRequest } from "../../interfaces/categories.interfaces";

const create = async (categorieData: TCategoryRequest): Promise<Category> => {
    const category: Category = repositorys.category.create(categorieData);

    await repositorys.category.save(category);

    return category;
};

export { create };