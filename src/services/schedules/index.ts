import { create } from "./createSchedules.service";
import { read } from "./readSchedulesOfRealEstate.service";

const schedules = {
    create,
    read
};

export { schedules };