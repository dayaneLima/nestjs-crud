import { Controller, Inject, Get, Post, Body, Query } from '@nestjs/common';
import { IPedidoService } from '../services/pedido.interface.service';
import { CriarPedidoDTO } from '../dto/criar-pedido.dto';
import { ListarPedidoDTO } from '../dto/listar-pedido.dto';

@Controller('/pedidos')
export class PedidoController {
	constructor(@Inject(IPedidoService) private readonly pedidoService: IPedidoService) {}

	@Get()
	async obterPedidosUsuario(@Query('usuarioId') usuarioId: string): Promise<ListarPedidoDTO[]> {
		return await this.pedidoService.obterPedidosUsuario(usuarioId);
	}

	@Post()
	async inserir(@Body() pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		return await this.pedidoService.inserir(pedidoDTO);
	}
}
