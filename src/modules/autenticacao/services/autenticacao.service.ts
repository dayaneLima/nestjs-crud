import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IAutenticacaoService } from './autenticacao.interface.service';
import { IUsuarioRepository } from 'src/modules/usuario/domain/usuario.interface.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsuarioPayload } from '../valueObjects/usuario-payload';
import { AcessTokenDTO } from '../dtos/access-token.dto';

@Injectable()
export class AutenticacaoService implements IAutenticacaoService {
	constructor(
		@Inject(IUsuarioRepository) private readonly usuarioRepository: IUsuarioRepository,
		private readonly jwtService: JwtService
	) {}

	async autenticar(email: string, senha: string): Promise<AcessTokenDTO> {
		const usuario = await this.usuarioRepository.obterPorEmail(email);
		const usuarioAutenticado = await bcrypt.compare(senha, usuario?.senha ?? '');

		if (!usuarioAutenticado) {
			throw new UnauthorizedException('O e-mail ou a senha está incorreto.');
		}

		const payload: UsuarioPayload = {
			sub: usuario?.id ?? '',
			nomeUsuario: usuario?.nome ?? ''
		};

		return { access_token: await this.jwtService.signAsync(payload) };
	}
}
