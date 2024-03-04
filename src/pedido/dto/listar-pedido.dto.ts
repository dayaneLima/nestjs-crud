import { StatusPedido } from '../valueObjects/status-pedido.enum';

export class ListarPedidoDTO {
	constructor(readonly status: StatusPedido) {}
}
