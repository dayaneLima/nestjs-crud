import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { IUsuarioService } from '../application/usuario.interface.service';
import { InsercaoUsuarioDTO } from './dto/insercao-usuario.dto';
import { v4 as uuid } from 'uuid';
import { ListagemUsuarioDTO } from './dto/listagem-usuario.dto';
import { AtualizacaoUsuarioDTO } from './dto/atualizacao-usuario.dto';
import { Usuario } from '../domain/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	@Get()
	async listar(): Promise<ListagemUsuarioDTO[]> {
		return await this.usuarioService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<Usuario> {
		return await this.usuarioService.obter(id);
	}

	@Post()
	async inserir(@Body() usuarioDTO: InsercaoUsuarioDTO): Promise<Usuario> {
		const usuario = new Usuario();
		usuario.id = uuid();
		usuario.nome = usuarioDTO.nome;
		usuario.email = usuarioDTO.email;
		usuario.senha = usuarioDTO.senha;

		return await this.usuarioService.inserir(usuario);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() usuarioDTO: AtualizacaoUsuarioDTO): Promise<void> {
		await this.usuarioService.atualizar(id, usuarioDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.usuarioService.excluir(id);
	}
}
