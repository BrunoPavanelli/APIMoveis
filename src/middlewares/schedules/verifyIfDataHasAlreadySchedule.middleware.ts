import { AppError } from "../../errors";

const verifyIfDataHasAlreadySchedule = (hour: string, date: string): void => {
    const isDataNaN = (data: any): boolean => Number.isNaN(data);
            
    const dayOfWeek: number = new Date(date).getDay();
    
    const onlyHour: number = Number(hour.slice(0,2));
    const onlyMinutes: number = Number(hour.slice(3,5));

    if (isDataNaN(dayOfWeek)) throw new AppError("Invalid date, work days are monday to friday", 400);
    if (isDataNaN(onlyHour) || isDataNaN(onlyMinutes)) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

    const correctDateSeparator: string = "/";
    const correctHourSeparator: string = ":";

    const dateFirstSeparator: string = date.slice(4,5);
    const dateSecondSeparator: string = date.slice(7,8);
    const hourSeparator: string = hour.slice(2,3);

    const isCorrectSeparatorDate: boolean = dateFirstSeparator === correctDateSeparator && dateSecondSeparator === correctDateSeparator;
    const isCorrectSeparatorHour: boolean = hourSeparator === correctHourSeparator;

    if (isCorrectSeparatorDate === false) throw new AppError("Invalid date, work days are monday to friday", 400);
    if (isCorrectSeparatorHour === false) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    if (dayOfWeek === 6 || dayOfWeek === 0) throw new AppError("Invalid date, work days are monday to friday", 400);
    if (onlyHour < 8) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    if (onlyHour === 18 && onlyMinutes > 0) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    if (onlyHour >= 19) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);  
};

export { verifyIfDataHasAlreadySchedule };