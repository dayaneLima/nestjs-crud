import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProdutoImagem } from './produto-imagem.entity';
import { ProdutoCaracteristica } from './produto-caracteristica.entity';

@Entity({ name: 'produtos' })
export class Produto {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ name: 'usuario_id', length: 100, nullable: false })
	usuarioId: string;

	@Column({ name: 'nome', length: 100, nullable: false })
	nome: string;

	@Column({ type: 'decimal', precision: 22, scale: 2, name: 'valor', nullable: false })
	valor: number;

	@Column({ name: 'quantidade_disponivel', nullable: false })
	quantidadeDisponivel: number;

	@Column({ name: 'descricao', length: 255, nullable: false })
	descricao: string;

	@Column({ name: 'categoria', length: 100, nullable: false })
	categoria: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: string;

	@OneToMany(() => ProdutoImagem, (produtoImagem) => produtoImagem.produto, { cascade: true, eager: true })
	imagens: ProdutoImagem[];

	@OneToMany(() => ProdutoCaracteristica, (produtoCaracteristica) => produtoCaracteristica.produto, { cascade: true, eager: true })
	caracteristicas: ProdutoCaracteristica[];
}
