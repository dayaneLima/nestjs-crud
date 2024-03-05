import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';

export interface IPedidoService {
	inserir(usuarioId: string, pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO>;
	obterPedidosUsuario(usuarioId: string): Promise<ListarPedidoDTO[]>;
}

export const IPedidoService = Symbol('IPedidoService');
