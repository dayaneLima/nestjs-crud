import { Pedido } from '../../pedido/domain/pedido.entity';
import { EntityCore } from '../../core/domain/entity.core';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
@Entity({ name: 'usuarios' })
export class Usuario extends EntityCore {
	@Expose()
	@Column({ name: 'nome', length: 100, nullable: false })
	nome: string;

	@Column({ name: 'email', length: 70, nullable: false })
	email: string;

	@Column({ name: 'senha', length: 255, nullable: false })
	senha: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: string;

	@OneToMany(() => Pedido, (pedido) => pedido.usuario)
	pedidos: Pedido[];
}
