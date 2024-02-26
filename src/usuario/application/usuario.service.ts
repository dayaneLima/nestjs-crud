import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from '../domain/usuario.entity';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { IUsuarioService } from './usuario.interface.service';
import { UsuarioRetornoDTO } from '../api/dto/usuario-retorno.dto';

@Injectable()
export class UsuarioService implements IUsuarioService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	public async inserir(usuario: Usuario): Promise<UsuarioRetornoDTO> {
		const usuarioInserido = await this.usuarioRepository.inserir(usuario);
		return new UsuarioRetornoDTO(usuarioInserido.id, usuarioInserido.nome, usuarioInserido.email);
	}

	public async listar(): Promise<UsuarioRetornoDTO[]> {
		const usuarios = await this.usuarioRepository.listar();
		return usuarios.map((usuario) => new UsuarioRetornoDTO(usuario.id, usuario.nome, usuario.email));
	}

	public async verificarUsuarioExiste(email: string, id?: string): Promise<boolean> {
		return await this.usuarioRepository.verificarExiste(email, id);
	}

	public async atualizar(id: string, usuarioParcial: Partial<Usuario>): Promise<UsuarioRetornoDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		Object.assign(usuario, usuarioParcial);
		await this.usuarioRepository.atualizar(id, usuario);

		return new UsuarioRetornoDTO(usuario.id, usuario.nome, usuario.email);
	}

	public async obter(id: string): Promise<UsuarioRetornoDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		return new UsuarioRetornoDTO(usuario.id, usuario.nome, usuario.email);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.usuarioRepository.excluir(id))) {
			throw new NotFoundException('Usuário não encontrado');
		}
	}
}
