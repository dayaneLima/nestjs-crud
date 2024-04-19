import { AtualizarPedidoDTO } from '../dtos/atualizar-pedido.dto';
import { CriarPedidoDTO } from '../dtos/criar-pedido.dto';
import { ListarPedidoDTO } from '../dtos/listar-pedido.dto';

export interface IPedidoService {
	inserir(usuarioId: string, pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO>;
	obterPedidosUsuario(usuarioId: string): Promise<ListarPedidoDTO[]>;
	atualizar(id: string, pedidoDTO: AtualizarPedidoDTO, usuarioId: string): Promise<ListarPedidoDTO>;
}

export const IPedidoService = Symbol('IPedidoService');
