import { Request, Response } from "express";

import { TRealEstateRequest } from "../interfaces/realEstate.interfaces";
import { services } from "../services";
import { RealEstate } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const realEstateData: TRealEstateRequest = req.body;

    const newRealEstate = await services.realEstates.create(realEstateData);

    return res.status(201).json(newRealEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const realEstates: RealEstate[] = await services.realEstates.read();

    return res.json(realEstates);
};

const realEstates = {
    create,
    read
};

export { realEstates };