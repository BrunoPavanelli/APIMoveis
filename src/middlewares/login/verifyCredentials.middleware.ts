import { compareSync } from "bcryptjs";
import { User } from "../../entities";
import { AppError } from "../../errors";

const verifyCredentials = (user: User, password: string) => {
    if (!user) throw new AppError("Invalid credentials", 401);

    const userInactive: string | null | undefined = user.deletedAt;
    if (userInactive) throw new AppError("Invalid credentials", 401);

    const userPassword: string = user.password;
    const userRequestPassword: string = password;

    const validatePassword: boolean = compareSync(userRequestPassword, userPassword);

    if (!validatePassword) throw new AppError("Invalid credentials", 401);
};

export { verifyCredentials };