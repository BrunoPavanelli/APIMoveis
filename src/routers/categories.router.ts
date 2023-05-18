import { Router } from "express";

import { schemas } from "../schemas";
import { middlewares } from "../middlewares";
import { controllers } from "../controllers";

const categories = Router();

categories.post("", middlewares.shared.verifyToken, middlewares.shared.validateSchema(schemas.categories.request), middlewares.shared.verifyData("categoryCreate"), controllers.categories.create);
categories.get("", controllers.categories.read);
categories.get("/:id/realEstate", middlewares.shared.verifyData("categoryRead"), controllers.categories.readById);

export { categories };