import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./users.entities";
import { RealEstate } from "./realEstate.entities";

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;
}

export { Schedule };