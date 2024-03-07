import { EntityCore } from '../../core/domain/entity.core';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { StatusPedido } from '../valueObjects/status-pedido.enum';
import { Usuario } from '../../usuario/domain/usuario.entity';
import { ItemPedido } from './item-pedido.entity';

@Entity({ name: 'pedidos' })
export class Pedido extends EntityCore {
	@Column({ name: 'valor_total', type: 'decimal', precision: 22, scale: 2, nullable: false })
	valorTotal: number;

	@Column({ name: 'status', enum: StatusPedido, nullable: false })
	status: StatusPedido;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: string;

	@ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
	usuario: Usuario;

	@OneToMany(() => ItemPedido, (itemPedido) => itemPedido.pedido, {
		cascade: true
	})
	itensPedido: ItemPedido[];
}
