import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPedidoService } from './pedido.interface.service';
import { IPedidoRepository } from '../domain/pedido.interface.repository';
import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';
import { Pedido } from '../domain/pedido.entity';
import { StatusPedido } from '../valueObjects/status-pedido.enum';
import { IUsuarioRepository } from 'src/modules/usuario/domain/usuario.interface.repository';
import { ItemPedido } from '../domain/item-pedido.entity';
import { IProdutoRepository } from '../../produto/domain/produto.interface.repository';
import { AtualizarPedidoDTO } from '../dto/atualizar-pedido.dto';
import { Produto } from 'src/modules/produto/domain/produto.entity';

@Injectable()
export class PedidoService implements IPedidoService {
	constructor(
		@Inject(IPedidoRepository) private pedidoRepository: IPedidoRepository,
		@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository,
		@Inject(IProdutoRepository) private produtoRepository: IProdutoRepository
	) {}

	private tratarDadosDoPedido(pedidoDTO: CriarPedidoDTO, produtosRelacionados: Produto[]) {
		pedidoDTO.itensPedido.forEach((itemPedido) => {
			const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId);

			if (produtoRelacionado === undefined) {
				throw new NotFoundException(`O produto com id ${itemPedido.produtoId} não foi encontrado`);
			}

			if (itemPedido.quantidade > produtoRelacionado.quantidadeDisponivel) {
				throw new BadRequestException(`A quantidade solicitada ${itemPedido.quantidade} é maior do que a disponível (${produtoRelacionado.quantidadeDisponivel}) para o produto ${produtoRelacionado.nome}`);
			}
		});
	}

	public async inserir(usuarioId: string, pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		const usuario = await this.usuarioRepository.obter(usuarioId);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		const produtosIds = pedidoDTO.itensPedido.map((itemPedido) => itemPedido.produtoId);
		const produtosRelacionados = await this.produtoRepository.obterPorIds(produtosIds);

		this.tratarDadosDoPedido(pedidoDTO, produtosRelacionados);

		const pedido = new Pedido();
		pedido.status = StatusPedido.EM_PROCESSAMENTO;
		pedido.usuario = usuario;

		const itensPedido = pedidoDTO.itensPedido.map((itemPedidoDTO) => {
			const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedidoDTO.produtoId);

			const itemPedido = new ItemPedido();
			itemPedido.produto = produtoRelacionado!;
			itemPedido.precoVenda = produtoRelacionado!.valor;
			itemPedido.quantidade = itemPedidoDTO.quantidade;
			itemPedido.produto.quantidadeDisponivel -= itemPedido.quantidade;
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
		await this.usuarioRepository.obter(usuarioId);
		const pedidos = await this.pedidoRepository.obterPedidosUsuario(usuarioId);
		return pedidos.map((pedido) => this.converterPedidoParaListarPedidoDTO(pedido));
	}

	public async atualizar(id: string, pedidoDTO: AtualizarPedidoDTO, usuarioId: string): Promise<ListarPedidoDTO> {
		const pedido = await this.pedidoRepository.obter(id);

		if (!pedido) {
			throw new NotFoundException('Pedido não encontrado');
		}

		if (pedido.usuario.id !== usuarioId) {
			throw new ForbiddenException('Você não tem autorização para atualizar esse pedido');
		}

		Object.assign(pedido, pedidoDTO as Pedido);
		await this.pedidoRepository.atualizar(pedido);
		return this.converterPedidoParaListarPedidoDTO(pedido);
	}

	private converterPedidoParaListarPedidoDTO(pedido: Pedido): ListarPedidoDTO {
		return new ListarPedidoDTO(pedido.status);
	}
}
