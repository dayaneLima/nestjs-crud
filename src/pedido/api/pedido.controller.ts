import { Controller, Inject, Get, Post, Body, Query, Param, Patch } from '@nestjs/common';
import { IPedidoService } from '../services/pedido.interface.service';
import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';
import { AtualizarPedidoDTO } from '../dto/atualizar-pedido.dto';

@Controller('/pedidos')
export class PedidoController {
	constructor(@Inject(IPedidoService) private readonly pedidoService: IPedidoService) {}

	@Get()
	async obterPedidosUsuario(@Query('usuarioId') usuarioId: string): Promise<ListarPedidoDTO[]> {
		return await this.pedidoService.obterPedidosUsuario(usuarioId);
	}

	@Post()
	async inserir(@Query('usuarioId') usuarioId: string, @Body() pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		return await this.pedidoService.inserir(usuarioId, pedidoDTO);
	}

	@Patch(':id')
	async atualizaPedido(@Param('id') pedidoId: string, @Body() pedidoDTO: AtualizarPedidoDTO) {
		return this.pedidoService.atualizar(pedidoId, pedidoDTO);
	}
}
