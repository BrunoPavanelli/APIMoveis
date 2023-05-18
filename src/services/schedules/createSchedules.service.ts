import { repositorys } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { TScheduleRequest } from "../../interfaces/schedules.interfaces";
import { AppError } from "../../errors";

const create = async (schedulesData: TScheduleRequest, userId: number): Promise<string> => {
    const userToMakeAnScheduleId: number = Number(userId);

    const userToMakeAnSchedule: User | null = await repositorys.user.findOneBy({
        id: userToMakeAnScheduleId
    });

    const realEstateToHaveAnScheduleId: number = Number(schedulesData.realEstateId);

    const realEstateToHaveAnSchedule: RealEstate | null=  await repositorys.realEstate.findOneBy({
        id: realEstateToHaveAnScheduleId
    });

    if (!realEstateToHaveAnSchedule) throw new AppError("Real Estate not Found", 404);

    const newSchedulesData = {
        ...schedulesData,
        realEstate: realEstateToHaveAnSchedule,
        user: userToMakeAnSchedule!,
    };
    
    const newSchedule: Schedule = repositorys.schedules.create(newSchedulesData);
    await repositorys.schedules.save(newSchedule);
    const newScheduleId: number = newSchedule.id;

    const schedule: Schedule | null = await repositorys.schedules.findOne({
        where: {id: newScheduleId},
        relations: {
            realEstate: true,
            user: true
        }
    });

    if (!schedule) throw new AppError("Something went wrong, please try again", 500);

    return "Schedule created";
};

export { create };