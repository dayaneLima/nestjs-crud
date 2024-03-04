import { Inject, Injectable } from '@nestjs/common';
import { IPedidoService } from './pedido.interface.service';
import { IPedidoRepository } from '../domain/pedido.interface.repository';

@Injectable()
export class PedidoService implements IPedidoService {
	constructor(@Inject(IPedidoRepository) private produtoRepository: IPedidoRepository) {}
}
