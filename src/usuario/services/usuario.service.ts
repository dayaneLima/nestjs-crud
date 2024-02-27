import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from '../domain/usuario.entity';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { IUsuarioService } from './usuario.interface.service';
import { UsuarioRetornoDTO } from '../api/dto/usuario-retorno.dto';
import { UsuarioInsercaoDTO } from '../api/dto/usuario-insercao.dto';
import { UsuarioAtualizacaoDTO } from '../api/dto/usuario-atualizacao.dto';

@Injectable()
export class UsuarioService implements IUsuarioService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	public async inserir(usuarioDTO: UsuarioInsercaoDTO): Promise<UsuarioRetornoDTO> {
		const usuario = new Usuario();
		usuario.nome = usuarioDTO.nome;
		usuario.email = usuarioDTO.email;
		usuario.senha = usuarioDTO.senha;

		const usuarioInserido = await this.usuarioRepository.inserir(usuario);
		return this.converterUsuarioParaUsuarioRetornoDTO(usuarioInserido);
	}

	public async listar(): Promise<UsuarioRetornoDTO[]> {
		const usuarios = await this.usuarioRepository.listar();
		return usuarios.map((usuario) => this.converterUsuarioParaUsuarioRetornoDTO(usuario));
	}

	public async verificarUsuarioExiste(email: string, id?: string): Promise<boolean> {
		return await this.usuarioRepository.verificarExiste(email, id);
	}

	public async atualizar(id: string, usuarioDTO: UsuarioAtualizacaoDTO): Promise<UsuarioRetornoDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		Object.assign(usuario, usuarioDTO);
		await this.usuarioRepository.atualizar(usuario);
		return this.converterUsuarioParaUsuarioRetornoDTO(usuario);
	}

	public async obter(id: string): Promise<UsuarioRetornoDTO> {
		const usuario = await this.usuarioRepository.obter(id);

		if (!usuario) {
			throw new NotFoundException('Usuário não encontrado');
		}

		return this.converterUsuarioParaUsuarioRetornoDTO(usuario);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.usuarioRepository.excluir(id))) {
			throw new NotFoundException('Usuário não encontrado');
		}
	}

	private converterUsuarioParaUsuarioRetornoDTO(usuario: Usuario): UsuarioRetornoDTO {
		return new UsuarioRetornoDTO(usuario.id, usuario.nome, usuario.email);
	}
}
