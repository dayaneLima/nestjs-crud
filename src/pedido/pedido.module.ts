import { Module } from '@nestjs/common';
import { PedidoController } from './api/pedido.controller';
import { PedidoServiceProvider, PedidoRepositoryProvider } from './providers/pedido.provider';
import { Pedido } from './domain/pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Pedido])],
	controllers: [PedidoController],
	providers: [PedidoServiceProvider, PedidoRepositoryProvider]
})
export class PedidoModule {}
