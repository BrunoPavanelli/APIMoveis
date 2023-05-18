import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { routes } from "./routers";
import { handleError } from "./errors";

const app = express();
app.use(express.json());

app.use("/users", routes.users);
app.use("/login", routes.login);
app.use("/categories", routes.categories);
app.use("/realEstate", routes.realEstate);
app.use("/schedules", routes.schedules);

app.use(handleError);

export default app;
