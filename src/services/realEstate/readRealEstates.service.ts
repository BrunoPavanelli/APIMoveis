import {  repositorys } from "../../data-source";
import { RealEstate } from "../../entities";

const read = async (): Promise<RealEstate[]> => {
    const realEstates: RealEstate[] = await repositorys.realEstate.find({
        relations: {
            address: true,
        }
    });

    return realEstates;
};

export { read };