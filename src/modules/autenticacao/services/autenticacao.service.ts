import { Inject, Injectable } from '@nestjs/common';
import { IAutenticacaoService } from './autenticacao.interface.service';
import { IUsuarioRepository } from 'src/modules/usuario/domain/usuario.interface.repository';

@Injectable()
export class AutenticacaoService implements IAutenticacaoService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	autenticar(email: string, senha: string) {
		return 'This action adds a new autenticacao';
	}
}
