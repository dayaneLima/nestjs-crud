import { Module } from '@nestjs/common';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './modulos/core/core.module';
import { ProdutoModule } from './modulos/produto/produto.module';
import { PedidoModule } from './modulos/pedido/pedido.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './modulos/core/filters/all-exception.filter';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		TypeOrmModule.forRootAsync({
			useClass: PostgresConfigService,
			inject: [PostgresConfigService]
		}),
		CacheModule.registerAsync({ useFactory: async () => ({ store: await redisStore({ ttl: 10 * 1000, url: 'redis://redis:6379' }) }), isGlobal: true }),
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
