import { Request, Response } from "express";

import { RealEstate } from "../entities";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";
import { services } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userInfos = res.locals.userInfos;
    const userId = Number(userInfos.userId);

    const schedulesData: TScheduleRequest = req.body;

    const newScheduleMessage: string = await services.schedules.create(schedulesData, userId);
    const newScheduleRespose = { message: newScheduleMessage};

    return res.status(201).json(newScheduleRespose);
};

const read =  async (req: Request, res: Response): Promise<Response> => {
    const realEstateId: number = Number(req.params.id);

    const realEstateSchedules: RealEstate = await services.schedules.read(realEstateId);

    return res.json(realEstateSchedules);
};

const schedules = {
    create,
    read
};

export { schedules };