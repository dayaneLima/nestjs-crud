import { Provider } from '@nestjs/common';
import { IAutenticacaoService } from '../services/autenticacao.interface.service';
import { AutenticacaoService } from '../services/autenticacao.service';

export const AutenticacaoServiceProvider: Provider = {
	provide: IAutenticacaoService,
	useClass: AutenticacaoService
};
