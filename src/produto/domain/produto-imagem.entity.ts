import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produto } from './produto.entity';

@Entity('produto_imagens')
export class ProdutoImagem {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ name: 'url', length: 100, nullable: false })
	url: string;

	@Column({ name: 'descricao', length: 100, nullable: false })
	descricao: string;

	@ManyToOne(() => Produto, (produto) => produto.imagens, {
		orphanedRowAction: 'delete',
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	produto: Produto;
}
