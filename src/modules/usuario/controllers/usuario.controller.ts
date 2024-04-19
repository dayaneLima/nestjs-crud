import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { IUsuarioService } from '../services/usuario.interface.service';
import { CriarUsuarioDTO } from '../dtos/criar-usuario.dto';
import { ListarUsuarioDTO } from '../dtos/listar-usuario.dto';
import { AtualizarUsuarioDTO } from '../dtos/atualizar-usuario.dto';
import { CriptografarSenhaPipe } from '../../../resources/pipes/criptografar-senha.pipe';
import { AutenticacaoGuard } from 'src/modules/autenticacao/guards/autenticacao.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios')
@ApiBearerAuth()
@UseGuards(AutenticacaoGuard)
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
	async inserir(@Body() usuarioDTO: CriarUsuarioDTO, @Body('senha', CriptografarSenhaPipe) senhaCriptografada: string): Promise<ListarUsuarioDTO> {
		return await this.usuarioService.inserir({ ...usuarioDTO, senha: senhaCriptografada });
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
