import { Router } from "express";

import { schemas } from "../schemas";
import { middlewares } from "../middlewares";
import { controllers } from "../controllers";

const login = Router();

login.post("", middlewares.shared.validateSchema(schemas.login.loginData), middlewares.shared.verifyData("userEmail", "login"), controllers.login);

export { login };