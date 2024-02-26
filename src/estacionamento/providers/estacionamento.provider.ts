import { Provider } from '@nestjs/common';
import { IEstacionamentoService } from '../application/estacionamento.interface.service';
import { EstacionamentoService } from '../application/estacionamento.service';
import { IEstacionamentoRepository } from '../domain/estacionamento.interface.repository';
import { EstacionamentoRepository } from '../data/estacionamento.repository';

export const EstacionamentoServiceProvider: Provider = {
	provide: IEstacionamentoService,
	useClass: EstacionamentoService
};

export const EstacionamentoRepositoryProvider: Provider = {
	provide: IEstacionamentoRepository,
	useClass: EstacionamentoRepository
};
