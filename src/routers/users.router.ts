import { Router } from "express";

import { schemas } from "../schemas";
import { middlewares } from "../middlewares";
import { controllers } from "../controllers";

const users = Router();

users.post("", middlewares.shared.validateSchema(schemas.users.request), middlewares.shared.verifyData("userEmail", "usersCreate"), controllers.users.create);
users.get("", middlewares.shared.verifyToken, middlewares.shared.verifyData("userToken", "usersRead"), controllers.users.read);
users.patch("/:id", middlewares.shared.verifyToken, middlewares.shared.verifyData("userToken", "usersUpdate"), controllers.users.update);
users.delete("/:id", middlewares.shared.verifyToken, middlewares.shared.verifyData("userToken", "usersSoftDelete"), controllers.users.softDelete);

export { users };