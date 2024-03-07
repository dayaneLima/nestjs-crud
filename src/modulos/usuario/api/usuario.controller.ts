import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { IUsuarioService } from '../services/usuario.interface.service';
import { CriarUsuarioDTO } from '../dto/criar-usuario.dto';
import { ListarUsuarioDTO } from '../dto/listar-usuario.dto';
import { AtualizarUsuarioDTO } from '../dto/atualizar-usuario.dto';

@Controller('/usuarios')
export class UsuarioController {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	@Get()
	async listar(): Promise<ListarUsuarioDTO[]> {
		return await this.usuarioService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<ListarUsuarioDTO> {
		return await this.usuarioService.obter(id);
	}

	@Post()
	async inserir(@Body() usuarioDTO: CriarUsuarioDTO): Promise<ListarUsuarioDTO> {
		return await this.usuarioService.inserir(usuarioDTO);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() usuarioDTO: AtualizarUsuarioDTO): Promise<ListarUsuarioDTO> {
		return await this.usuarioService.atualizar(id, usuarioDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.usuarioService.excluir(id);
	}
}
