import { Pedido } from './pedido.entity';
export interface IPedidoRepository {
	inserir(pedido: Pedido): Promise<Pedido>;
	obterPedidosUsuario(usuarioId: string): Promise<Pedido[]>;
	atualizar(pedido: Pedido): Promise<Pedido>;
	obter(id: string): Promise<Pedido | null>;
}

export const IPedidoRepository = Symbol('IPedidoRepository');
