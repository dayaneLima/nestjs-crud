import { Module } from '@nestjs/common';
import { EstacionamentoController } from './api/estacionamento.controller';
import { EstacionamentoServiceProvider, EstacionamentoRepositoryProvider } from './providers/estacionamento.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estacionamento } from './domain/estacionamento.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Estacionamento])],
	controllers: [EstacionamentoController],
	providers: [EstacionamentoServiceProvider, EstacionamentoRepositoryProvider]
})
export class EstacionamentoModule {}
