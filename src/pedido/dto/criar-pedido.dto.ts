import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { ItemPedidoDTO } from './item-pedido.dto';

export class CriarPedidoDTO {
	@ValidateNested()
	@IsArray()
	@ArrayMinSize(1)
	@Type(() => ItemPedidoDTO)
	itensPedido: ItemPedidoDTO[];
}
