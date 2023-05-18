import { z } from "zod";

import { schemas } from "../schemas";

type TCategory = z.infer<typeof schemas.categories.category>

type TCategoryById = z.infer<typeof schemas.categories.categoryById>

type TCategoryRequest = z.infer<typeof schemas.categories.request>

export { TCategory, TCategoryRequest, TCategoryById };

