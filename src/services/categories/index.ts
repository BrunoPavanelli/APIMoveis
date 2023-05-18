import { create } from "./createCategorie.service";
import { read } from "./readCategories.service";
import { readById } from "./readCategoriesById";

const categories = {
    create,
    read,
    readById
};

export { categories };