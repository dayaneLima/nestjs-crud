import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produto } from './produto.entity';

@Entity('produto_caracteristicas')
export class ProdutoCaracteristica {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ name: 'nome', length: 100, nullable: false })
	nome: string;

	@Column({ name: 'descricao', length: 255, nullable: false })
	descricao: string;

	@ManyToOne(() => Produto, (produto) => produto.imagens, {
		orphanedRowAction: 'delete',
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	produto: Produto;
}
