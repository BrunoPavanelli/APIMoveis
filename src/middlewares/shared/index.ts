import { validateSchema } from "./validateSchema.middleware";
import { verifyData } from "./verifyData.middleware";
import { verifyExistingData } from "./verifyExistingData.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyUserPermission } from "./verifyUserPermission.middleware";

const shared = {
    validateSchema,
    verifyData,
    verifyExistingData,
    verifyToken,
    verifyUserPermission
};

export { shared };