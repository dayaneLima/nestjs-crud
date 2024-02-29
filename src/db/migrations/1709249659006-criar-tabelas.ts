import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriarTabelas1709249659006 implements MigrationInterface {
	name = 'CriarTabelas1709249659006';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`CREATE TABLE "produto_imagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying(100) NOT NULL, "descricao" character varying(100) NOT NULL, "produtoId" uuid, CONSTRAINT "PK_d1cf326e8d58dbc469bd7fe2f32" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "produto_caracteristicas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "descricao" character varying(255) NOT NULL, "produtoId" uuid, CONSTRAINT "PK_132816ff55e30a6bf554c9e2545" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "produtos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "valor" numeric(22,2) NOT NULL, "quantidade_disponivel" integer NOT NULL, "descricao" character varying(255) NOT NULL, "categoria" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "senha" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "estacionamento_imagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying(100) NOT NULL, "descricao" character varying(100) NOT NULL, "estacionamentoId" uuid, CONSTRAINT "PK_54761638d36c8a37646cf521caa" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "estacionamentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(150) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_f52c7720f1dbae3540f26f2659c" PRIMARY KEY ("id"))`);
		await queryRunner.query(`ALTER TABLE "produto_imagens" ADD CONSTRAINT "FK_eb1531605709dd94ec67b2141d0" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
		await queryRunner.query(`ALTER TABLE "produto_caracteristicas" ADD CONSTRAINT "FK_67339e59ab4b3ed091cf318f426" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
		await queryRunner.query(`ALTER TABLE "estacionamento_imagens" ADD CONSTRAINT "FK_7ff4fb0ac62bcd8bc9070d60541" FOREIGN KEY ("estacionamentoId") REFERENCES "estacionamentos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "estacionamento_imagens" DROP CONSTRAINT "FK_7ff4fb0ac62bcd8bc9070d60541"`);
		await queryRunner.query(`ALTER TABLE "produto_caracteristicas" DROP CONSTRAINT "FK_67339e59ab4b3ed091cf318f426"`);
		await queryRunner.query(`ALTER TABLE "produto_imagens" DROP CONSTRAINT "FK_eb1531605709dd94ec67b2141d0"`);
		await queryRunner.query(`DROP TABLE "estacionamentos"`);
		await queryRunner.query(`DROP TABLE "estacionamento_imagens"`);
		await queryRunner.query(`DROP TABLE "usuarios"`);
		await queryRunner.query(`DROP TABLE "produtos"`);
		await queryRunner.query(`DROP TABLE "produto_caracteristicas"`);
		await queryRunner.query(`DROP TABLE "produto_imagens"`);
	}
}
