import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { IUsuarioService } from "../application/usuario.interface.service";
import { InsercaoUsuarioDTO } from "./dto/insercao-usuario.dto";
import { v4 as uuid } from "uuid";
import { ListagemUsuarioDTO } from "./dto/listagem-usuario.dto";
import { AtualizacaoUsuarioDTO } from "./dto/atualizacao-usuario.dto";
import { Usuario } from "../domain/usuario.entity";

@Controller("/usuarios")
export class UsuarioController {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	@Get()
	async listar(): Promise<ListagemUsuarioDTO[]> {
		const usuarios = await this.usuarioService.listar();
		return usuarios.map((usuario) => new ListagemUsuarioDTO(usuario.id, usuario.nome, usuario.email));
	}

	@Get("/:id")
	async obter(@Param("id") id: string): Promise<Usuario> {
		return await this.usuarioService.obter(id);
	}

	@Post()
	async inserir(@Body() dadosUsuario: InsercaoUsuarioDTO): Promise<Usuario> {
		return await this.usuarioService.inserir({
			id: uuid(),
			nome: dadosUsuario.nome,
			email: dadosUsuario.email,
			senha: dadosUsuario.senha
		});
	}

	@Put("/:id")
	async atualizar(@Param("id") id: string, @Body() dadosUsuario: AtualizacaoUsuarioDTO): Promise<Usuario> {
		return await this.usuarioService.atualizar(id, dadosUsuario);
	}

	@Delete("/:id")
	async excluir(@Param("id") id: string): Promise<void> {
		await this.usuarioService.excluir(id);
	}
}
