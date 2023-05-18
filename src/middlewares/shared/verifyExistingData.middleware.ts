import { Repository } from "typeorm";
import { AppError } from "../../errors";

const verifyExistingData = async (repository: Repository<any>, typeOfSearch: "ifExists" | "ifNotExists" ,dataKey: string | number, dataValue: string | number, message: string, statusCode: number): Promise<void> => {
    const reposiToryData: Repository<any> = await repository.findOneBy({
        [dataKey]: dataValue
    });

    if (typeOfSearch === "ifExists"? reposiToryData : !reposiToryData) throw new AppError(`${message}`, statusCode);
};

export { verifyExistingData };