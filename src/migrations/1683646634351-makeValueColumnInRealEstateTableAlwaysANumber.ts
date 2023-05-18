import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeValueColumnInRealEstateTableAlwaysANumber1683646634351 implements MigrationInterface {
    name = 'MakeValueColumnInRealEstateTableAlwaysANumber1683646634351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP NOT NULL`);
    }

}
