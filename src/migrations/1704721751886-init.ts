import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1704721751886 implements MigrationInterface {
    name = 'Init1704721751886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "violation" ("vio_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quiz_id" character varying NOT NULL, "auth_id" character varying NOT NULL, "report_by" character varying NOT NULL, "status" character varying NOT NULL, "detail" character varying NOT NULL, "created_at" character varying NOT NULL DEFAULT 'Mon Jan 08 2024', CONSTRAINT "PK_6bcfeadabfa0a2ab5da9fd6b7c3" PRIMARY KEY ("vio_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "violation"`);
    }

}
