import { z } from "zod";

import { schemas } from "../schemas";

type TLogin = z.infer<typeof schemas.login.loginData>

type TLoginDataToken = z.infer<typeof schemas.login.userLoginDataToken>

export { TLogin, TLoginDataToken};