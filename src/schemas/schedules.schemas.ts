import { z } from "zod";

const response = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number()
});

const schedule = response.omit({realEstateId: true, userId: true});

const scheduleWithRealEstate = response.omit({userId: true});

const request = response.omit({id: true, userId: true});

const schedules = {
    schedule,
    request,
    response,
    scheduleWithRealEstate
};

export { schedules };