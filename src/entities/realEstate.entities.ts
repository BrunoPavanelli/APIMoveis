import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne, BeforeInsert } from "typeorm";

import { Schedule } from "./schedules.entities";
import { Address } from "./addresses.entities";
import { Category } from "./categories.entities";

@Entity("real_estate")
class RealEstate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "boolean", default: false, nullable: true})
    sold?: boolean | null | undefined;

    @Column({type: "decimal", precision: 12, scale: 2, default: 0})
    value: number | string;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;

    @BeforeInsert()
    makeValueNumber() {
        let value = Number(this.value);
        value = Number.isNaN(value) ? 0 : value;
        this.value = value;
    }
}

export { RealEstate };