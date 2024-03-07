import { Provider } from '@nestjs/common';
import { IUsuarioService } from '../services/usuario.interface.service';
import { UsuarioService } from '../services/usuario.service';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { UsuarioRepository } from '../data/usuario.repository';

export const UsuarioServiceProvider: Provider = {
	provide: IUsuarioService,
	useClass: UsuarioService
};

export const UsuarioRepositoryProvider: Provider = {
	provide: IUsuarioRepository,
	useClass: UsuarioRepository
};
