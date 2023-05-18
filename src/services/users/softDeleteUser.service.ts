import { repositorys } from "../../data-source";
import { User } from "../../entities";

const softDelete = async (userId: number): Promise<void> => {
   const user: User | null  = await repositorys.user.findOneBy({
        id: userId
    });

    await repositorys.user.softRemove(user!);
};

export { softDelete };