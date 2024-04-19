import { Controller, Inject, Get, Post, Body, Param, Patch, UseGuards, Req } from '@nestjs/common';
import { IPedidoService } from '../services/pedido.interface.service';
import { CriarPedidoDTO } from '../dtos/criar-pedido.dto';
import { ListarPedidoDTO } from '../dtos/listar-pedido.dto';
import { AtualizarPedidoDTO } from '../dtos/atualizar-pedido.dto';
import { AutenticacaoGuard } from 'src/modules/autenticacao/guards/autenticacao.guard';
import { RequestUsuario } from 'src/modules/autenticacao/valueObjects/request-usuario';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('pedidos')
@ApiBearerAuth()
@UseGuards(AutenticacaoGuard)
@Controller('/pedidos')
export class PedidoController {
	constructor(@Inject(IPedidoService) private readonly pedidoService: IPedidoService) {}

	@Get()
	async obterPedidosUsuario(@Req() req: RequestUsuario): Promise<ListarPedidoDTO[]> {
		const usuarioId = req.usuario.sub;
		return await this.pedidoService.obterPedidosUsuario(usuarioId);
	}

	@Post()
	async inserir(@Req() req: RequestUsuario, @Body() pedidoDTO: CriarPedidoDTO): Promise<ListarPedidoDTO> {
		const usuarioId = req.usuario.sub;
		return await this.pedidoService.inserir(usuarioId, pedidoDTO);
	}

	@Patch(':id')
	async atualizaPedido(@Req() req: RequestUsuario, @Param('id') pedidoId: string, @Body() pedidoDTO: AtualizarPedidoDTO) {
		const usuarioId = req.usuario.sub;
		return this.pedidoService.atualizar(pedidoId, pedidoDTO, usuarioId);
	}
}
