import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

import { Schedule } from "./schedules.entities";

@Entity ("users")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: "varchar", length: 45, unique: true})
    email: string;

    @Column({type: "boolean", default: false})
    admin: boolean;

    @Column({type: "varchar", length: 120})
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @DeleteDateColumn({type: "date",nullable: true})
    deletedAt?: string | null | undefined;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[];
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isHashed = getRounds(this.password);

        if(!isHashed) this.password = hashSync(this.password, 10);
    }
}

export { User };