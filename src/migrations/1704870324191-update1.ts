import { MigrationInterface, QueryRunner } from "typeorm";

export class Update11704870324191 implements MigrationInterface {
    name = 'Update11704870324191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "violation" ALTER COLUMN "created_at" SET DEFAULT 'Wed Jan 10 2024'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "violation" ALTER COLUMN "created_at" SET DEFAULT 'Mon Jan 08 2024'`);
    }

}
