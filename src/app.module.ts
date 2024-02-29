import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { EstacionamentoModule } from './estacionamento/estacionamento.module';
import { CoreModule } from './core/core.module';
import { ProdutoModule } from './produto/produto.module';

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
		EstacionamentoModule,
		ProdutoModule
	]
})
export class AppModule {}
