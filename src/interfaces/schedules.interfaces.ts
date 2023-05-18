import { z } from "zod";
import { schemas } from "../schemas";

type TSchedule = z.infer<typeof schemas.schedules.schedule>

type TScheduleRequest = z.infer<typeof schemas.schedules.request>

type TScheduleWithRealEstate = z.infer<typeof schemas.schedules.scheduleWithRealEstate>

type TScheduleResponse = z.infer<typeof schemas.schedules.response>

export { TSchedule, TScheduleRequest, TScheduleResponse, TScheduleWithRealEstate };