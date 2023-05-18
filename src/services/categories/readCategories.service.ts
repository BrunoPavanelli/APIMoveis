import { repositorys } from "../../data-source";
import { Category } from "../../entities";

const read = async (): Promise<Category[]> => {
   const categories: Category[] = await repositorys.category.find();

    return  categories;
};

export { read };