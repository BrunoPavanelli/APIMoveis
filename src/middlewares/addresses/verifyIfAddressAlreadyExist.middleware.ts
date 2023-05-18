import { repositorys } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors";

const verifyIfAddressAlreadyExists = async (address: Address): Promise<void> => {
    const { street, zipCode, number, city, state } = address;
    const numberAddress = number ? number : null;

    const addressToFind: Address | null = await repositorys.address.createQueryBuilder("address")
    .select(["address.street", "address.zipCode", "address.number", "address.city", "address.state"])
    .where("address.street = :street", { street })
    .andWhere("address.zipCode = :zipCode", { zipCode })
    .andWhere("address.number = :numberAddress", { numberAddress })
    .andWhere("address.city = :city", { city })
    .andWhere("address.state = :state", { state })
    .getOne();
    
    if (addressToFind) throw new AppError("Address already exists", 409);
};

export { verifyIfAddressAlreadyExists };