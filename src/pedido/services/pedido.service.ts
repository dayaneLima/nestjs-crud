import { Inject, Injectable } from '@nestjs/common';
import { IPedidoService } from './pedido.interface.service';
import { IPedidoRepository } from '../domain/pedido.interface.repository';
import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';
import { Pedido } from '../domain/pedido.entity';
import { StatusPedido } from '../valueObjects/status-pedido.enum';
import { IUsuarioRepository } from 'src/usuario/domain/usuario.interface.repository';
import { ItemPedido } from '../domain/item-pedido.entity';
import { IProdutoRepository } from '../../produto/domain/produto.interface.repository';

@Injectable()
export class PedidoService implements IPedidoService {
	constructor(
		@Inject(IPedidoRepository) private pedidoRepository: IPedidoRepository,
		@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository,
		@Inject(IProdutoRepository) private produtoRepository: IProdutoRepository
	) {}

	public async inserir(usuarioId: string, pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		const usuario = await this.usuarioRepository.obter(usuarioId);

		const produtosIds = pedidoDTO.itensPedido.map((itemPedido) => itemPedido.produtoId);
		const produtosRelacionados = await this.produtoRepository.obterPorIds(produtosIds);

		const pedido = new Pedido();
		pedido.status = StatusPedido.EM_PROCESSAMENTO;
		pedido.usuario = usuario;

		const itensPedido = pedidoDTO.itensPedido.map((itemPedidoDTO) => {
			const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedidoDTO.produtoId);
			const itemPedido = new ItemPedido();
			itemPedido.produto = produtoRelacionado;
			itemPedido.precoVenda = produtoRelacionado.valor;
			itemPedido.quantidade = itemPedidoDTO.quantidade;
			return itemPedido;
		});

		const valorTotal = itensPedido.reduce((total, item) => {
			return total + item.precoVenda * item.quantidade;
		}, 0);

		pedido.itensPedido = itensPedido;
		pedido.valorTotal = valorTotal;

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
