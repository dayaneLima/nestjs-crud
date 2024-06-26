import { Module } from '@nestjs/common';
import { PedidoController } from './controllers/pedido.controller';
import { PedidoServiceProvider, PedidoRepositoryProvider } from './providers/pedido.provider';
import { Pedido } from './domain/pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from 'src/modules/usuario/usuario.module';
import { ProdutoModule } from 'src/modules/produto/produto.module';

@Module({
	imports: [TypeOrmModule.forFeature([Pedido]), UsuarioModule, ProdutoModule],
	controllers: [PedidoController],
	providers: [PedidoServiceProvider, PedidoRepositoryProvider]
})
export class PedidoModule {}
