import { Controller, Inject } from '@nestjs/common';
import { IPedidoService } from '../services/pedido.interface.service';
// import { CreatePedidoDto } from '../dto/criar-pedido.dto';
// import { UpdatePedidoDto } from '../dto/atualizar-pedido.dto';

@Controller('/pedidos')
export class PedidoController {
	constructor(@Inject(IPedidoService) private readonly pedidoService: IPedidoService) {}

	// @Post()
	// create(@Body() createPedidoDto: CreatePedidoDto) {
	// 	return this.pedidoService.create(createPedidoDto);
	// }

	// @Get()
	// findAll() {
	// 	return this.pedidoService.findAll();
	// }

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.pedidoService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
	// 	return this.pedidoService.update(+id, updatePedidoDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.pedidoService.remove(+id);
	// }
}
