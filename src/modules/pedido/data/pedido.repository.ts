import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../domain/pedido.entity';
import { IPedidoRepository } from '../domain/pedido.interface.repository';

@Injectable()
export class PedidoRepository implements IPedidoRepository {
	constructor(@InjectRepository(Pedido) private readonly pedidoTypeOrmRepository: Repository<Pedido>) {}

	public async inserir(pedido: Pedido): Promise<Pedido> {
		return await this.pedidoTypeOrmRepository.save(pedido);
	}

	public async obterPedidosUsuario(usuarioId: string): Promise<Pedido[]> {
		return this.pedidoTypeOrmRepository.find({
			where: {
				usuario: { id: usuarioId }
			},
			relations: {
				usuario: true
			}
		});
	}

	public async atualizar(pedido: Pedido): Promise<Pedido> {
		return await this.pedidoTypeOrmRepository.save(pedido);
	}

	public async obter(id: string): Promise<Pedido | null> {
		return await this.pedidoTypeOrmRepository.findOne({
			where: { id: id },
			relations: { usuario: true }
		});
	}
}
