import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from '../domain/usuario.entity';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { IUsuarioService } from './usuario.interface.service';
import { ListagemUsuarioDTO } from '../api/dto/listagem-usuario.dto';

@Injectable()
export class UsuarioService implements IUsuarioService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	public async inserir(usuario: Usuario): Promise<Usuario> {
		return await this.usuarioRepository.inserir(usuario);
	}

	public async listar(): Promise<ListagemUsuarioDTO[]> {
		const usuarios = await this.usuarioRepository.listar();
		return usuarios.map((usuario) => new ListagemUsuarioDTO(usuario.id, usuario.nome, usuario.email));
	}

	public async verificarUsuarioExiste(email: string): Promise<boolean> {
		return await this.usuarioRepository.verificarExiste(email);
	}

	public async atualizar(id: string, usuario: Partial<Usuario>): Promise<void> {
		if (!(await this.usuarioRepository.atualizar(id, usuario))) {
			throw new NotFoundException('Usuário não encontrado');
		}
	}

	public async obter(id: string): Promise<Usuario> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		return usuario;
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.usuarioRepository.excluir(id))) {
			throw new NotFoundException('Usuário não encontrado');
		}
	}
}
