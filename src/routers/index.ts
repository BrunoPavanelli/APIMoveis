import { users } from "./users.router";
import { login } from "./login.router";
import { categories } from "./categories.router";
import { realEstate } from "./realEstate.router";
import { schedules } from "./schedules.router";

const routes = {
    users,
    login,
    categories,
    realEstate,
    schedules,
};

export { routes };
