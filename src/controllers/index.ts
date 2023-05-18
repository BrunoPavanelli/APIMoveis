import { users } from "./users.controllers";
import { login } from "./login.controllers";
import { categories } from "./categories.controllers";
import { realEstates } from "./realEstate.controllers";
import { schedules } from "./schedules.controllers";

const controllers = {
    users,
    login,
    categories,
    realEstates,
    schedules
};

export { controllers };