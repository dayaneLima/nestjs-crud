import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './core/filters/all-exception.filter';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		TypeOrmModule.forRootAsync({
			useClass: PostgresConfigService,
			inject: [PostgresConfigService]
		}),
		CoreModule,
		UsuarioModule,
		ProdutoModule,
		PedidoModule
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: AllExceptionFilter
		}
	]
})
export class AppModule {}
