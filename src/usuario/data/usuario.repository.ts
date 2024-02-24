import { Injectable } from "@nestjs/common";
import { Usuario } from "../domain/usuario.entity";
import { IUsuarioRepository } from "../domain/usuario.interface.repository";

@Injectable()
export class UsuarioRepository implements IUsuarioRepository {
	private usuarios: Usuario[] = [];

	public async inserir(usuario: Usuario): Promise<Usuario> {
		this.usuarios.push(usuario);
		return usuario;
	}

	public async listar(): Promise<Usuario[]> {
		return this.usuarios;
	}

	public async verificarExiste(email: string): Promise<boolean> {
		return this.usuarios.find((u: Usuario) => u.email === email) !== undefined;
	}
}
