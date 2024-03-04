import { MigrationInterface, QueryRunner } from "typeorm";

export class RemocaoCampoNomePedido1709582283273 implements MigrationInterface {
    name = 'RemocaoCampoNomePedido1709582283273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "nome"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "nome" character varying(100) NOT NULL`);
    }

}
