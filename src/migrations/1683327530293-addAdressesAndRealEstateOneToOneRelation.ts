import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdressesAndRealEstateOneToOneRelation1683327530293 implements MigrationInterface {
    name = 'AddAdressesAndRealEstateOneToOneRelation1683327530293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "adressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "adressId"`);
    }

}
