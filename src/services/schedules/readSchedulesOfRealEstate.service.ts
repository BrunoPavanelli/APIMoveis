import { repositorys } from "../../data-source";
import { RealEstate } from "../../entities";

const read = async (realEstateId: number) => {
    const realEstateSchedules: RealEstate | null = await repositorys.realEstate.createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where({id: realEstateId})
    .getOne();

    return realEstateSchedules!;
};

export { read };