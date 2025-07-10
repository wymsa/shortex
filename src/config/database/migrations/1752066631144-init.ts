import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1752066631144 implements MigrationInterface {
	name = 'Init1752066631144';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "shortener_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "token" character varying NOT NULL, "originalUrl" text NOT NULL, CONSTRAINT "UQ_f9e912ab97d7b79a06b00a34dfa" UNIQUE ("token"), CONSTRAINT "PK_49fb9b7ae1acf6b7c6a505b8d79" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "shortener_entity"`);
	}
}
