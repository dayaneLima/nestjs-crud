import { Pedido } from './pedido.entity';

export interface IPedidoRepository {
	inserir(pedido: Pedido): Promise<Pedido>;
	obterPedidosUsuario(usuarioId: string): Promise<Pedido[]>;
}

export const IPedidoRepository = Symbol('IPedidoRepository');
