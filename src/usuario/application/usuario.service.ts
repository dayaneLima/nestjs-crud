import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "../domain/usuario.entity";
import { IUsuarioRepository } from "../domain/usuario.interface.repository";
import { IUsuarioService } from "./usuario.interface.service";

@Injectable()
export class UsuarioService implements IUsuarioService {
	constructor(@Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository) {}

	public async inserir(usuario: Usuario): Promise<Usuario> {
		return this.usuarioRepository.inserir(usuario);
	}

	public async listar(): Promise<Usuario[]> {
		return this.usuarioRepository.listar();
	}

	public async verificarUsuarioExiste(email: string): Promise<boolean> {
		return this.usuarioRepository.verificarExiste(email);
	}
}
