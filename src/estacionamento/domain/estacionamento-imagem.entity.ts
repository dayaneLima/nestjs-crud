import { EntityCore } from 'src/core/domain/entity.core';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'estacionamento_imagens' })
export class EstacionamentoImagem extends EntityCore {
	@Column({ name: 'url', length: 100, nullable: false })
	url: string;

	@Column({ name: 'descricao', length: 100, nullable: false })
	descricao: string;

	@Column({ name: 'estacionamento_id', length: 100, nullable: false })
	estacionamentoId: string;
}
