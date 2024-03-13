import { ClassSerializerInterceptor, ConsoleLogger, Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './modules/core/core.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionFilter } from './resources/filters/all-exception.filter';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AutenticacaoModule } from './modules/autenticacao/autenticacao.module';
import { LoggerGlobalInterceptor } from './resources/interceptors/logger-global.interceptor';

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
		PedidoModule,
		AutenticacaoModule
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: AllExceptionFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: ClassSerializerInterceptor
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggerGlobalInterceptor
		},
		ConsoleLogger
	]
})
export class AppModule {}
