import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUpdatedAtColumnNameInUsersEntites1683485654842 implements MigrationInterface {
    name = 'FixUpdatedAtColumnNameInUsersEntites1683485654842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
