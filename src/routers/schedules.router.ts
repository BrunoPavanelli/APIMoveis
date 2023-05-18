import { Router } from "express";

import { schemas } from "../schemas";
import { middlewares } from "../middlewares";
import { controllers } from "../controllers";

const schedules = Router();

schedules.post("", middlewares.shared.verifyToken, middlewares.shared.validateSchema(schemas.schedules.request), middlewares.shared.verifyData("schedulesCreate"), controllers.schedules.create);
schedules.get("/realEstate/:id", middlewares.shared.verifyToken, middlewares.shared.verifyData("schedulesRead"), controllers.schedules.read);

export { schedules };