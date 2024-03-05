import { EntityCore } from '../../core/domain/entity.core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from '../../produto/domain/produto.entity';

@Entity({ name: 'itens_pedidos' })
export class ItemPedido extends EntityCore {
	@Column({ name: 'quantidade', nullable: false })
	quantidade: number;

	@Column({ name: 'preco_total', type: 'decimal', precision: 22, scale: 2, nullable: false })
	precoVenda: number;

	@ManyToOne(() => Pedido, (pedido) => pedido.itensPedido, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	pedido: Pedido;

	@ManyToOne(() => Produto, (produto) => produto.itensPedido, {
		cascade: ['update']
	})
	produto: Produto;
}
