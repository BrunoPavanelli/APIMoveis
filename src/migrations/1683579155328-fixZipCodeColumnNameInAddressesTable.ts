import { MigrationInterface, QueryRunner } from "typeorm";

export class FixZipCodeColumnNameInAddressesTable1683579155328 implements MigrationInterface {
    name = 'FixZipCodeColumnNameInAddressesTable1683579155328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipdCode" TO "zipCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "zipdCode"`);
    }

}
