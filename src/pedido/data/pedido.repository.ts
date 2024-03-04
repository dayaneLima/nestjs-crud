import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../domain/pedido.entity';
import { IPedidoRepository } from '../domain/pedido.interface.repository';

@Injectable()
export class PedidoRepository implements IPedidoRepository {
	constructor(@InjectRepository(Pedido) private readonly produtoTypeOrmRepository: Repository<Pedido>) {}
}
