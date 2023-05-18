import { verifyIfUserOrRealEstateHasAlreadyScheduleInDate } from "./verifyIfUserHasAlreadyScheduleInDate.middleware";
import { verifyIfDataHasAlreadySchedule } from "./verifyIfDataHasAlreadySchedule.middleware";

const schedules = { 
    verifyIfUserOrRealEstateHasAlreadyScheduleInDate,
    verifyIfDataHasAlreadySchedule
};

export { schedules };