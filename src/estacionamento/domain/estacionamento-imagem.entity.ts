import { EntityCore } from '../../core/domain/entity.core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Estacionamento } from './estacionamento.entity';

@Entity({ name: 'estacionamento_imagens' })
export class EstacionamentoImagem extends EntityCore {
	@Column({ name: 'url', length: 100, nullable: false })
	url: string;

	@Column({ name: 'descricao', length: 100, nullable: false })
	descricao: string;

	@ManyToOne(() => Estacionamento, (estacionamento) => estacionamento.imagens, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
	estacionamento: Estacionamento;
}
