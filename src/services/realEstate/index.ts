import { create } from "./createNewRealEstate.service";
import { read } from "./readRealEstates.service";

const realEstates = {
    create,
    read
};

export { realEstates };