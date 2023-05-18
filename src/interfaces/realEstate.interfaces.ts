import { z } from "zod";

import { schemas } from "../schemas";

type TAddress = z.infer<typeof schemas.realEstates.address>

type TAddressArray = z.infer<typeof schemas.realEstates.addressArray>

type TAddressSave = z.infer<typeof schemas.realEstates.addressSave>

type TRealEstate = z.infer<typeof schemas.realEstates.realEstate>

type TRealEstateRequest = z.infer<typeof schemas.realEstates.request>

type TRealEstateSave = z.infer<typeof schemas.realEstates.save>

type TRealEstateCreated = z.infer<typeof schemas.realEstates.created>

export { TAddress, TRealEstate, TRealEstateRequest, TAddressSave, TRealEstateSave, TRealEstateCreated, TAddressArray };