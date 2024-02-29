import { EntityCore } from '../../core/domain/entity.core';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { EstacionamentoImagem } from './estacionamento-imagem.entity';

@Entity({ name: 'estacionamentos' })
export class Estacionamento extends EntityCore {
	@Column({ name: 'nome', length: 150, nullable: false })
	nome: string;

	@OneToMany(() => EstacionamentoImagem, (estacionamentoImagem) => estacionamentoImagem.estacionamento, { cascade: true, eager: true })
	imagens: EstacionamentoImagem[];

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: string;
}
