import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { IUsuarioService } from "../application/usuario.interface.service";
import { InsercaoUsuarioDTO } from "./dto/insercao-usuario.dto";
import { v4 as uuid } from "uuid";
import { ListagemUsuarioDTO } from "./dto/listagem-usuario.dto";

@Controller("/usuarios")
export class UsuarioController {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	@Get()
	async listar(): Promise<ListagemUsuarioDTO[]> {
		const usuarios = await this.usuarioService.listar();
		return usuarios.map((usuario) => new ListagemUsuarioDTO(usuario.id, usuario.nome));
	}

	@Post()
	async inserir(@Body() dadosUsuario: InsercaoUsuarioDTO) {
		return this.usuarioService.inserir({
			id: uuid(),
			nome: dadosUsuario.nome,
			email: dadosUsuario.email,
			senha: dadosUsuario.senha
		});
	}
}
