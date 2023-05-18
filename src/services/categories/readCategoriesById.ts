import { repositorys } from "../../data-source";
import {  TCategoryById } from "../../interfaces/categories.interfaces";

const readById = async (categoryId: number): Promise<TCategoryById> => {
    const category: TCategoryById | null = await repositorys.category.findOne({
        where: {id: categoryId},
        relations: {
            realEstate: true
        }
    });

    return category!;
};

export { readById };