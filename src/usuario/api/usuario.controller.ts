import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { IUsuarioService } from '../application/usuario.interface.service';
import { UsuarioInsercaoDTO } from './dto/usuario-insercao.dto';
import { v4 as uuid } from 'uuid';
import { UsuarioRetornoDTO } from './dto/usuario-retorno.dto';
import { UsuarioAtualizacaoDTO } from './dto/usuario-atualizacao.dto';
import { Usuario } from '../domain/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	@Get()
	async listar(): Promise<UsuarioRetornoDTO[]> {
		return await this.usuarioService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<UsuarioRetornoDTO> {
		return await this.usuarioService.obter(id);
	}

	@Post()
	async inserir(@Body() usuarioDTO: UsuarioInsercaoDTO): Promise<UsuarioRetornoDTO> {
		const usuario = new Usuario();
		usuario.id = uuid();
		usuario.nome = usuarioDTO.nome;
		usuario.email = usuarioDTO.email;
		usuario.senha = usuarioDTO.senha;

		return await this.usuarioService.inserir(usuario);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() usuarioDTO: UsuarioAtualizacaoDTO): Promise<UsuarioRetornoDTO> {
		return await this.usuarioService.atualizar(id, usuarioDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.usuarioService.excluir(id);
	}
}
