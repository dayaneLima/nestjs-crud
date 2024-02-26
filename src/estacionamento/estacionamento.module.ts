import { Module } from '@nestjs/common';
import { EstacionamentoController } from './api/estacionamento.controller';
import { EstacionamentoServiceProvider, EstacionamentoRepositoryProvider } from './providers/estacionamento.provider';

@Module({
	controllers: [EstacionamentoController],
	providers: [EstacionamentoServiceProvider, EstacionamentoRepositoryProvider]
})
export class EstacionamentoModule {}
