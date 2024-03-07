import { Provider } from '@nestjs/common';
import { IPedidoRepository } from '../domain/pedido.interface.repository';
import { PedidoRepository } from '../data/pedido.repository';
import { IPedidoService } from '../services/pedido.interface.service';
import { PedidoService } from '../services/pedido.service';

export const PedidoServiceProvider: Provider = {
	provide: IPedidoService,
	useClass: PedidoService
};

export const PedidoRepositoryProvider: Provider = {
	provide: IPedidoRepository,
	useClass: PedidoRepository
};
