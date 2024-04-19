import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from '../domain/usuario.entity';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { IUsuarioService } from './usuario.interface.service';
import { ListarUsuarioDTO } from '../dtos/listar-usuario.dto';
import { CriarUsuarioDTO } from '../dtos/criar-usuario.dto';
import { AtualizarUsuarioDTO } from '../dtos/atualizar-usuario.dto';

@Injectable()
export class UsuarioService implements IUsuarioService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	public async inserir(usuarioDTO: CriarUsuarioDTO): Promise<ListarUsuarioDTO> {
		const usuario = new Usuario();
		Object.assign(usuario, usuarioDTO as Usuario);

		const usuarioInserido = await this.usuarioRepository.inserir(usuario);
		return this.converterUsuarioParaListarUsuarioDTO(usuarioInserido);
	}

	public async listar(): Promise<ListarUsuarioDTO[]> {
		const usuarios = await this.usuarioRepository.listar();
		return usuarios.map((usuario) => this.converterUsuarioParaListarUsuarioDTO(usuario));
	}

	public async verificarUsuarioExiste(email: string, id?: string): Promise<boolean> {
		return await this.usuarioRepository.verificarExiste(email, id);
	}

	public async atualizar(id: string, usuarioDTO: AtualizarUsuarioDTO): Promise<ListarUsuarioDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		Object.assign(usuario, usuarioDTO as Usuario);
		await this.usuarioRepository.atualizar(usuario);
		return this.converterUsuarioParaListarUsuarioDTO(usuario);
	}

	public async obter(id: string): Promise<ListarUsuarioDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		return this.converterUsuarioParaListarUsuarioDTO(usuario);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.usuarioRepository.excluir(id))) {
			throw new NotFoundException('Usuário não encontrado');
		}
	}

	private converterUsuarioParaListarUsuarioDTO(usuario: Usuario): ListarUsuarioDTO {
		return new ListarUsuarioDTO(usuario.id, usuario.nome);
	}
}
