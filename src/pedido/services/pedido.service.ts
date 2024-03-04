import { Inject, Injectable } from '@nestjs/common';
import { IPedidoService } from './pedido.interface.service';
import { IPedidoRepository } from '../domain/pedido.interface.repository';
import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';
import { Pedido } from '../domain/pedido.entity';
import { StatusPedido } from '../valueObjects/status-pedido.enum';
import { IUsuarioRepository } from 'src/usuario/domain/usuario.interface.repository';

@Injectable()
export class PedidoService implements IPedidoService {
	constructor(
		@Inject(IPedidoRepository) private pedidoRepository: IPedidoRepository,
		@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository
	) {}

	public async inserir(pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		const usuario = await this.usuarioRepository.obter(pedidoDTO.usuarioId);

		const pedido = new Pedido();
		pedido.valorTotal = 0;
		pedido.status = StatusPedido.EM_PROCESSAMENTO;
		pedido.usuario = usuario;

		const pedidoInserido = await this.pedidoRepository.inserir(pedido);
		return this.converterPedidoParaListarPedidoDTO(pedidoInserido);
	}

	public async obterPedidosUsuario(usuarioId: string): Promise<ListarPedidoDTO[]> {
		const pedidos = await this.pedidoRepository.obterPedidosUsuario(usuarioId);
		return pedidos.map((pedido) => this.converterPedidoParaListarPedidoDTO(pedido));
	}

	private converterPedidoParaListarPedidoDTO(pedido: Pedido): ListarPedidoDTO {
		return new ListarPedidoDTO(pedido.status);
	}
}
