import { Repository } from "typeorm";
import { repositorys } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

const verifyIfUserOrRealEstateHasAlreadyScheduleInDate = async (idToFind: number, hour: string, date: string, repository: Repository<any>, tableName: string, message: string): Promise<void> => {
    const toFindSchedules: Repository<any> = await repository.createQueryBuilder(`${tableName}`)
    .select([
        `${tableName}.id`,
        "schedules.id",
        "schedules.date",
        "schedules.hour"
    ])
    .leftJoin(`${tableName}.schedules`, "schedules")
    .where(`${tableName}.id = :idToFind`, { idToFind })
    .andWhere("schedules.hour = :hour", { hour })
    .andWhere("schedules.date = :date", { date })
    .getOne();
    
    if (toFindSchedules) throw new AppError(message, 409);
};

export { verifyIfUserOrRealEstateHasAlreadyScheduleInDate };