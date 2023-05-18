import { repositorys } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { schemas } from "../../schemas";
import { TAddressSave, TRealEstate, TRealEstateRequest, TRealEstateSave } from "../../interfaces/realEstate.interfaces";
import { AppError } from "../../errors";

const create = async (realEstateData: TRealEstateRequest): Promise<TRealEstate> => {
    const addressToCreate: TAddressSave = realEstateData.address;

    const newAddress: Address = repositorys.address.create(addressToCreate);
    await repositorys.address.save(newAddress);

    const categoryIdToRelate: number = realEstateData.categoryId;
    const categoryToRelate: Category | null = await repositorys.category.findOneBy({
        id: categoryIdToRelate
    });
       
    const realEstateDataParsed: TRealEstateSave = schemas.realEstates.save.parse(realEstateData);

    if (!categoryToRelate) throw new AppError("Category Not Found", 404);

    const realEstateToCreate = {
        ...realEstateDataParsed,
        category: categoryToRelate,
        address: newAddress
    };

    const newRealEstate = repositorys.realEstate.create(realEstateToCreate);
    await repositorys.realEstate.save(newRealEstate);

    const realEstateResponse: RealEstate | null = await repositorys.realEstate.findOne({
        where: {id: newRealEstate.id},
        relations: {
            address: true,
            category: true
        }
    });

    return realEstateResponse!;
};

export { create };