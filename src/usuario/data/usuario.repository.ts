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

	public async atualizar(id: string, usuario: Partial<Usuario>): Promise<Usuario> {
		const usuarioAtualizacao = await this.obter(id);

		Object.entries(usuario).forEach(([chave, valor]) => {
			if (chave === "id") return;
			usuarioAtualizacao[chave] = valor;
		});

		return usuarioAtualizacao;
	}

	public async obter(id: string): Promise<Usuario> {
		return this.usuarios.find((u: Usuario) => u.id === id);
	}

	public async excluir(id: string): Promise<void> {
		this.usuarios = this.usuarios.filter((u: Usuario) => u.id !== id);
	}
}
