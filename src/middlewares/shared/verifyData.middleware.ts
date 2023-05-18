import { NextFunction, Request, Response } from "express";

import { repositorys } from "../../data-source";
import { User, Address } from "../../entities";
import { AppError } from "../../errors";
import { schemas } from "../../schemas";
import { TUserTokenInfos } from "../../interfaces/users.interfaces";
import { middlewares } from "..";

const verifyData = (dataKey: any, route?: string | null | undefined) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const userInfos: TUserTokenInfos | null | undefined  = res.locals.userInfos;

    const userIsAdmin: boolean | null | undefined  = userInfos?.userIsAdmin;
    const userLoggedId: number | null | undefined = Number(userInfos?.userId);

    switch (dataKey)  {
        case "userEmail":
            const user: User | null = await repositorys.user.findOneBy({
                email: req.body.email
            });

            switch (route) {
                case "usersCreate": 
                    if (user) throw new AppError("Email already exists", 409);
                break;
                
                case "login": 
                    const userRequestPassword: string = req.body.password;
                    middlewares.login.verifyCredentials(user!, userRequestPassword);

                    res.locals.dataToken = schemas.login.userLoginDataToken.parse(user);
                break;
            }
        break;

        case "userToken":
            const userRequestId: number | null | undefined = Number(req.params.id);
            
            let userForVerify: User | null | undefined = undefined;
            
            if (userRequestId) userForVerify = await repositorys.user.findOneBy({
                id: userRequestId
            });
            
            const validateIfUserLoggedIsUserToPatch: boolean = userLoggedId === userRequestId;
            
            switch (route) {
                case "usersRead":
                    middlewares.shared.verifyUserPermission(userIsAdmin!);
                break;
                    
                case "usersSoftDelete":
                    if (!userForVerify) throw new AppError("User not found", 404);
                    
                    middlewares.shared.verifyUserPermission(userIsAdmin!);

                    const userInactive = userForVerify.deletedAt;
                    if (userInactive) throw new AppError("User not found", 404);
                break;

                case "usersUpdate":
                    if (!userForVerify) throw new AppError("User not found", 404);
                    if (!userIsAdmin && !validateIfUserLoggedIsUserToPatch) throw new AppError("Insufficient permission", 403);

                    res.locals.userToUpdate = userForVerify;
                break;    
            }
        break;

        case "categoryCreate":
            middlewares.shared.verifyUserPermission(userIsAdmin!);

            const name: string = req.body.name;
            await middlewares.shared.verifyExistingData(repositorys.category, "ifExists" , "name", name, "Category already exists", 409);
        break;

        case "categoryRead":
            const categoryId: number = Number(req.params.id);

            await middlewares.shared.verifyExistingData(repositorys.category, "ifNotExists", "id", categoryId, "Category not found", 404);
        break;

        case "addressCreate":
            middlewares.shared.verifyUserPermission(userIsAdmin!);
            const addressToCheck: Address = req.body.address;
            
            await middlewares.addresses.verifyIfAddressAlreadyExists(addressToCheck);
        break;

        case "schedulesCreate":    
            const realEstateId: number = Number(req.body.realEstateId);
            
            const date: string = req.body.date;
            const hour: string = req.body.hour;
            
            await middlewares.schedules.verifyIfUserOrRealEstateHasAlreadyScheduleInDate(userLoggedId, hour, date, repositorys.user, "user", "User schedule to this real estate at this date and time already exists");     

            await middlewares.shared.verifyExistingData(repositorys.realEstate, "ifNotExists", "id", realEstateId, "RealEstate not found", 404);           
            await middlewares.schedules.verifyIfUserOrRealEstateHasAlreadyScheduleInDate(realEstateId, hour, date, repositorys.realEstate, "realEstate", "Schedule to this real estate at this date and time already exists");
            
            middlewares.schedules.verifyIfDataHasAlreadySchedule(hour, date);
        break;

        case "schedulesRead":
            middlewares.shared.verifyUserPermission(userIsAdmin!);

            const realEstateIdToListSchedulesId: number = Number(req.params.id);
            await middlewares.shared.verifyExistingData(repositorys.schedules, "ifNotExists", "id", realEstateIdToListSchedulesId, "RealEstate not found", 404);
    }
    return next();
};

export { verifyData };