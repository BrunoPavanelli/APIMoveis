import { Router } from "express";

import { schemas } from "../schemas";
import { middlewares } from "../middlewares";
import { controllers } from "../controllers";

const realEstate = Router();

realEstate.post("", middlewares.shared.verifyToken, middlewares.shared.validateSchema(schemas.realEstates.request), middlewares.shared.verifyData("addressCreate"), controllers.realEstates.create);
realEstate.get("", controllers.realEstates.read);

export { realEstate };