import { IsEnum } from 'class-validator';
import { StatusPedido } from '../valueObjects/status-pedido.enum';

export class AtualizarPedidoDTO {
	@IsEnum(StatusPedido)
	status: StatusPedido;
}
